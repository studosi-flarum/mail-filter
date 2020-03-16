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

namespace Studosi\MailFilter\Api\Controllers;

use Flarum\Api\Controller\AbstractDeleteController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Studosi\MailFilter\Commands\DeleteRule;


class DeleteRuleController extends AbstractDeleteController
{
    protected $bus;

    public function __construct(Dispatcher $bus)
    { $this->bus = $bus; }

    protected function delete(ServerRequestInterface $request)
    {
        $this->bus->dispatch(new DeleteRule(array_get($request->getQueryParams(), "id"),
                                            $request->getAttribute("actor")));
    }
}
