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

namespace Studosi\MailFilter\Validators;

use Flarum\Foundation\ValidationException;
use Studosi\MailFilter\Rule;


class MailValidator
{
    private static function checkRegex($emailString, $entries)
    {
        foreach ($entries as $entry)
        {
            if (preg_match("/".$entry->value."/", $emailString, $_match))
            { return true; }
        }

        return false;
    }

    private static function checkExact($emailString, $entries)
    {
        foreach ($entries as $entry)
        {
            if ($emailString == ($entry->value))
            { return true; }
        }

        return false;
    }

    private static function raiseBlack()
    { throw new ValidationException([app("translator")->trans("studosi-mail-filter.forum.error.blacklisted")]); }

    private static function raiseWhite()
    { throw new ValidationException([app("translator")->trans("studosi-mail-filter.forum.error.not_whitelisted")]); }

    public static function validate($emailString)
    {
        $actives = Rule::all()->where("active", 1);
        $blacklisted = false;

        if (MailValidator::checkExact($emailString, $actives->where("rule_type", 3)))
        { MailValidator::raiseBlack(); }

        if (MailValidator::checkRegex($emailString, $actives->where("rule_type", 4)))
        { $blacklisted = true; }

        $whitelistRegex = $actives->where("rule_type", 2);
        $whitelistExact = $actives->where("rule_type", 1);

        if ($blacklisted)
        {
            if (MailValidator::checkExact($emailString, $whitelistExact))
            { return 0; }
            else
            { MailValidator::raiseBlack(); }
        }
        else
        {
            if ($whitelistRegex->isEmpty() && $whitelistExact->isEmpty())
            { return 0; }
            else
            {
                if (MailValidator::checkRegex($emailString, $whitelistRegex) ||
                    MailValidator::checkExact($emailString, $whitelistExact))
                { return 0; }
                else
                { MailValidator::raiseWhite(); }
            }
        }

        return 1;
    }
}
