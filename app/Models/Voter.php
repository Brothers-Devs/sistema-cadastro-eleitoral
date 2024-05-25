<?php

namespace App\Models;

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
}
