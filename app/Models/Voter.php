<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Voter extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'date_of_birth',
        'rg',
        'cpf',
        'phone',
        'title_number',
        'zone',
        'session',
        'address',
        'zip_code',
        'neighborhood',
        'city',
        'leader_id',
    ];

    public function leader(): BelongsTo
    {
        return $this->belongsTo(Leader::class);
    }

    public function setCpfAttribute($value): void
    {
        $this->attributes['cpf'] = preg_replace('/\D/', '', $value);
    }

    public function setPhoneAttribute($value): void
    {
        $this->attributes['phone'] = preg_replace('/\D/', '', $value);
    }

    public function setZipCodeAttribute($value): void
    {
        $this->attributes['zip_code'] = preg_replace('/\D/', '', $value);
    }

    public function setDateOfBirthAttribute($value): void
    {
        if ($value) {
            $this->attributes['date_of_birth'] = Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d');
        }
    }

    public function getDateOfBirthAttribute($value): ?string
    {
        if ($value) {
            return Carbon::createFromFormat('Y-m-d', $value)->format('d/m/Y');
        }
        return null;
    }
}
