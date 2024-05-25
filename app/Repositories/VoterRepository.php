<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Voter;

class VoterRepository
{
    public function __construct(
        protected Voter $model
    ) {
    }

    public function all()
    {
        return $this->model->all();
    }
}
