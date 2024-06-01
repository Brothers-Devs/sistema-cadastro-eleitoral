<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateLeaderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'required|max:255',
            'cpf' => 'required|size:11|unique:leaders'
        ];

        if ($this->method() == 'PUT' || $this->method() == 'PATCH') {
            $rules['cpf'] = [
                'required',
                'size:11',
                Rule::unique('leaders')->ignore($this->id),
            ];
        }

        return $rules;
    }

    /**
     * @return void
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'cpf' => preg_replace('/\D/', '', $this->cpf),
        ]);
    }
}
