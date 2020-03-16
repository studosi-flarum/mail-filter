<?php

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

namespace Studosi\MailFilter;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class Rule extends AbstractModel
{
    protected $table = "mail_rules";

    public static function build($rule_type, $name, $value, $active)
    {
        $rule = new static();

        $rule->rule_type = $rule_type;
        $rule->name = $name;
        $rule->value = $value;
        $rule->active = $active;

        return $rule;
    }

    public function updateName($name)
    {
        $this->name = $name;

        return $this;
    }

    public function updateValue($value)
    {
        $this->value = $value;

        return $this;
    }

    public function updateActive($active)
    {
        $this->active = $active;

        return $this;
    }
}
