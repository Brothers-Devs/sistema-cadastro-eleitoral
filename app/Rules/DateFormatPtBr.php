<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class DateFormatPtBr implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!preg_match('/^\d{2}\/\d{2}\/\d{4}$/', $value)) {
            $fail('The :attribute must be a valid date in the format dd/mm/yyyy.');
            return;
        }

        $parts = explode('/', $value);
        $day = $parts[0];
        $month = $parts[1];
        $year = $parts[2];

        if (!checkdate($month, $day, $year)) {
            $fail('The :attribute must be a valid date.');
        }
    }
}
