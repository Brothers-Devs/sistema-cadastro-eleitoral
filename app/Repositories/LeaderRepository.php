<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Leader;

class LeaderRepository
{
    public function __construct(
        protected Leader $model
    ) {
    }

    public function all()
    {
        return $this->model->all();
    }
}
