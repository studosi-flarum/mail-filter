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

use Flarum\Extend;
use Flarum\User\Event\Saving;
use Illuminate\Events\Dispatcher;
use Studosi\MailFilter\Api\Controllers;
use Studosi\MailFilter\Validators\MailValidator;

return
[
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Routes('api'))
        ->get('/mail_rules', 'mail_rules.index', Controllers\ListRulesController::class)
        ->post('/mail_rules', 'mail_rules.create', Controllers\CreateRuleController::class)
        ->delete('/mail_rules/{id}', 'mail_rules.delete', Controllers\DeleteRuleController::class)
        ->patch('/mail_rules/{id}', 'mail_rules.update', Controllers\UpdateRuleController::class),
    new Extend\Compat(function (Dispatcher $events)
    {
        $events->listen(Saving::class, function (Saving $event)
        {
            $email = array_get($event->data, "attributes.email");

            if ($email !== null && MailValidator::validate($email) !== 0)
            {
                throw new ValidationException([
                    app("translator")->trans("studosi-mail-filter.forum.error.generic")]);
            }
        });
    })
];
