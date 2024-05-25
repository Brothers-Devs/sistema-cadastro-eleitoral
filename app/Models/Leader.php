<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Leader extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cpf',
    ];

    public function voters(): HasMany
    {
        return $this->hasMany(Voter::class);
    }
}
