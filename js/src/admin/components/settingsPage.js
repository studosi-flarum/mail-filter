/*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Alert from 'flarum/components/Alert';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';


const key_to_id =
  {
    "null": 0,
    "whitelist": 1,
    "whitelist_regex": 2,
    "blacklist": 3,
    "blacklist_regex": 4
  };

const id_to_key =
  {
    0: "null",
    1: "whitelist",
    2: "whitelist_regex",
    3: "blacklist",
    4: "blacklist_regex"
  };

export default class SettingsPage extends Page
{
  init()
  {
    this.storage =
      {
        "whitelist": [],
        "whitelist_regex": [],
        "blacklist": [],
        "blacklist_regex": []
      };

    app.store.find("mail_rules").then(this.loadRules.bind(this));

    this.newRules = {};
    this.isRegex = {};

    for(const key of ["whitelist", "whitelist_regex", "blacklist", "blacklist_regex"])
    {
      this.newRules[key] =
        {
          name: m.prop(""),
          value: m.prop("")
        };

      this.isRegex[key] = (key.length > 9);
    }
  }

  getExistingBlock(key, full_key)
  {
    return this.storage[key].map(rule =>
    {
      return m("div", { className: "Rules-existing", style: "float: left;", display: "block"},
        [
          Switch.component(
            {
              className: "Rules-switch",
              state: rule.active() || false,
              onchange: this.toggleRuleActivity.bind(this, rule)
            }),
          m("input",
            {
              className: "FormControl Rules-name",
              value: rule.name(),
              placeholder: app.translator.trans("studosi-mail-filter.admin.settings.rule.name_placeholder"),
              oninput: m.withAttr("value", this.updateRuleName.bind(this, rule))
            }),
          m("input",
            {
              className: "FormControl Rules-value",
              value: rule.value(),
              placeholder: app.translator.trans(full_key + "." + "placeholder"),
              oninput: m.withAttr("value", this.updateRuleValue.bind(this, rule, key))
            }),
          Button.component(
            {
              type: "button",
              className: "Button Button--warning Rules-button",
              icon: "fa fa-times",
              onclick: this.removeRule.bind(this, rule, key)
            })
        ])
    });
  }

  getNewBlock(key, full_key)
  {
    return m("div", { className: "Rules-new", style: "float: left; margin-bottom: 15px"},
      [
        m("input",
          {
            className: "FormControl Rules-name",
            value: this.newRules[key].name(),
            placeholder: app.translator.trans("studosi-mail-filter.admin.settings.rule.name_placeholder"),
            oninput: m.withAttr("value", this.newRules[key].name)
          }),
        m("input",
          {
            className: "FormControl Rules-value",
            value: this.newRules[key].value(),
            placeholder: app.translator.trans(full_key + "." + "placeholder"),
            oninput: m.withAttr("value", this.newRules[key].value)
          }),
        Button.component(
          {
            type: "button",
            className: "Button Button--warning Rules-button",
            icon: "fa fa-plus",
            onclick: this.addRule.bind(this, key)
          })
      ]);
  }

  getBlock(key)
  {
    const full_key = "studosi-mail-filter.admin." + key;

    return [
      m("fieldset", { className: "settingsPage-" + key},
        [
          m("legend", {}, app.translator.trans(full_key + "." + "label")),
          m("div", { className: "description" }, app.translator.trans(full_key + "." + "desc")),
          m("div", { className: "rulesContainer" },
            this.getExistingBlock(key, full_key), this.getNewBlock(key, full_key))
        ])];
  }

  view()
  {
    return [
      m("div", {className: "studosiMailFilterSettingsPage" },
        [
          m("h1", { className: "settingsHeader" }, "Studoši - Mail Filter"),
          m("div", { className: "filterFields" },
            [
              this.getBlock("whitelist"),
              this.getBlock("whitelist_regex"),
              this.getBlock("blacklist"),
              this.getBlock("blacklist_regex")
            ]),
          //m("div", { className: "settingsFooter" }, [])
        ])
    ];
  }

  updateRuleName(rule, value)
  { rule.save({ name: value }); }

  updateRuleValue(rule, key, value)
  {
    if (!this.isRegex[key] || this.checkRegex(value))
    { rule.save({ value: value }); }
  }

  checkRegex(value)
  {
    try
    { new RegExp(value); }
    catch (e)
    {
      alert(app.translator.trans("studosi-mail-filter.admin.error.invalid_regex"));
      return false;
    }

    return true;
  }

  toggleRuleActivity(rule)
  { rule.save({ active: !rule.active() }); }

  addRule(key, rule)
  {
    if(!this.isRegex[key] || this.checkRegex(this.newRules[key].value()))
    {
      app.store
        .createRecord("mail_rules")
        .save(
          {
            rule_type: key_to_id[key],
            name: this.newRules[key].name(),
            value: this.newRules[key].value(),
            active: true
          })
        .then(rule =>
        {
          this.newRules[key].name("");
          this.newRules[key].value("");
          this.storage[key].push(rule);

          m.redraw();
        });
    }
  }

  removeRule(rule_to_remove, key)
  {
    rule_to_remove.delete();

    this.storage[key].some((rule, i) =>
    {
      if (rule.data.id === rule_to_remove.data.id)
      {
        this.storage[key].splice(i, 1);
        return true;
      }
    });
  }

  loadRules(rules)
  {
    for(const entry of rules)
    {
      const key = id_to_key[entry.rule_type()];

      this.storage[key].push(entry);
      m.redraw();
    }
  }
}
