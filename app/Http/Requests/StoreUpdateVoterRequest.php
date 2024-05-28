<?php

namespace App\Http\Requests;

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
        return [
            'name' => 'required|max:255',
            'date_of_birth' => 'nullable|date|date_format:Y-d-m',
            'rg' => 'nullable|max:10',
            'cpf' => 'required|min:11|max:11|unique:voters',
            'phone' => 'required|digits:11',
            'title_number' => 'nullable|max:45',
            'zone' => 'nullable|max:45',
            'session' => 'nullable|max:5',
            'address' => 'nullable|string|max:255',
            'zip_code' => 'nullable|digits:8',
            'neighborhood' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'leader_name' => 'required|max:255',
            'leader_cpf' => 'required|min:11|max:11'
        ];
    }
}
