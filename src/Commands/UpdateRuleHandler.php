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

namespace Studosi\MailFilter\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Studosi\MailFilter\Rule;
use Studosi\MailFilter\Validators\RuleValidator;


class UpdateRuleHandler
{
    use AssertPermissionTrait;

    protected $validator;

    public function __construct(RuleValidator $validator)
    { $this->validator = $validator; }

    public function handle(UpdateRule $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $attributes = array_get($data, "attributes", []);
        $validate = [];

        $this->assertAdmin($actor);

        $rule = Rule::where("id", $command->ruleId)->firstOrFail();

        if (isset($attributes["name"]) && "" !== $attributes["name"])
        {
            $validate["name"] = $attributes["name"];
            $rule->updateName($attributes["name"]);
        }

        if (isset($attributes["value"]) && "" !== $attributes["value"])
        {
            $validate["value"] = $attributes["value"];
            $rule->updateValue($attributes["value"]);
        }

        if (isset($attributes["active"]) && "" !== $attributes["active"])
        {
            $validate["active"] = $attributes["active"];
            $rule->updateActive($attributes["active"]);
        }

        $this->validator->assertValid(array_merge($rule->getDirty(), $validate));
        $rule->save();

        return $rule;
    }
}
