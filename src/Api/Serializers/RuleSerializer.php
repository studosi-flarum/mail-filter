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

namespace Studosi\MailFilter\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Studosi\MailFilter\Rule;


class RuleSerializer extends AbstractSerializer
{
    protected $type = "mail_rules";

    protected function getDefaultAttributes($rule)
    {
        if (!($rule instanceof Rule))
        { throw new InvalidArgumentException(get_class($this)." can only serialize instances of ".Rule::class); }

        return ["rule_type" => $rule->rule_type,
                "name" => $rule->name,
                "value" => $rule->value,
                "active" => $rule->active];
    }
}
