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

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;


return [
    "up" => function (Builder $schema) {
        if ($schema->hasTable("mail_rules")) {
            return;
        }

        $schema->create("mail_rules", function (Blueprint $table) {
            $table->increments("id");
            $table->integer("rule_type");
            $table->string("name");
            $table->string("value"); 
            $table->boolean("active");
        });
    },
    "down" => function (Builder $schema) {
        $schema->dropIfExists("mail_rules");
    },
];
