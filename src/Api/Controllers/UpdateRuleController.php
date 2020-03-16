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

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Studosi\MailFilter\Api\Serializers\RuleSerializer;
use Studosi\MailFilter\Commands\UpdateRule;
use Tobscure\JsonApi\Document;


class UpdateRuleController extends AbstractShowController
{
    public $serializer = RuleSerializer::class;
    protected $bus;

    public function __construct(Dispatcher $bus)
    { $this->bus = $bus; }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(new UpdateRule(array_get($request->getQueryParams(), "id"),
                                                   $request->getAttribute("actor"),
                                                   array_get($request->getParsedBody(),
                                                   "data",
                                                   [])));
    }
}
