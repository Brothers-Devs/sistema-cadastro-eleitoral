<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Dto\Leader\CreateLeaderDto;
use App\Models\Leader;

class LeaderRepository
{
    public function __construct(
        public Leader $model
    )
    {
    }

    public function all()
    {
        return $this->model->all();
    }

    public function findByCpf(string $cpf)
    {
        $leader = $this->model->where('cpf', $cpf)->first();
        if (!$leader) {
            return null;
        }

        return $leader;
    }

    public function create(CreateLeaderDto $dto)
    {
        return $this->model->create($dto->toArray());
    }
}
