<?php

namespace App\Http\Requests;

use App\Rules\DateFormatPtBr;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateVoterRequest extends FormRequest
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
            'date_of_birth' => ['nullable', new DateFormatPtBr()],
            'rg' => 'nullable|max:10',
            'cpf' => 'required|size:11|unique:voters',
            'phone' => 'required|size:11',
            'title_number' => 'nullable|max:45',
            'zone' => 'nullable|max:45',
            'session' => 'nullable|max:5',
            'address' => 'nullable|string|max:255',
            'zip_code' => 'nullable|size:8',
            'neighborhood' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'leader_name' => 'required|max:255',
            'leader_cpf' => 'required|size:11'
        ];

        if ($this->method() == 'PUT' || $this->method() == 'PATCH') {
            $rules['cpf'] = [
                'required',
                'size:11',
                Rule::unique('voters')->ignore($this->id)
            ];
        }

        return $rules;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'cpf' => preg_replace('/\D/', '', $this->cpf),
            'phone' => preg_replace('/\D/', '', $this->phone),
            'zip_code' => preg_replace('/\D/', '', $this->zip_code),
            'leader_cpf' => preg_replace('/\D/', '', $this->leader_cpf),
        ]);
    }

}
