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

import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import SettingsPage from './components/settingsPage';


export default function()
{
  app.routes["studosi/mail-filter"] =
    {
      path: "/studosi/mail-filter",
      component: SettingsPage.component()
    };
  app.extensionSettings["studosi/mail-filter"] =
    () => m.route(app.route("studosi/mail-filter"));

  extend(AdminNav.prototype, "items", items =>
  {
    items.add
    (
      "studosi/mail-filter",
      AdminLinkButton.component
      (
        {
          href: app.route("studosi/mail-filter"),
          icon: "fas fa-envelope-square",
          children: app.translator.trans("studosi-mail-filter.admin.nav.title"),
          description: app.translator.trans("studosi-mail-filter.admin.nav.desc"),
        }
      )
    );
  });
}
