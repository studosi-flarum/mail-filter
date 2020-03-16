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


class CreateRuleHandler
{
    use AssertPermissionTrait;

    protected $validator;

    public function __construct(RuleValidator $validator)
    { $this->validator = $validator; }

    public function handle(CreateRule $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $this->assertAdmin($actor);

        $rule = Rule::build(array_get($data, "attributes.rule_type"),
                            array_get($data, "attributes.name"),
                            array_get($data, "attributes.value"),
                            array_get($data, "attributes.active"));

        $this->validator->assertValid($rule->getAttributes());
        $rule->save();

        return $rule;
    }
}
