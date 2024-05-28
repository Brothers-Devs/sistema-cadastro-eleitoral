<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Leader\CreateLeaderDto;
use App\Repositories\LeaderRepository;

class LeaderService
{
    public function __construct(
        protected LeaderRepository $leaderRepository
    ) {
    }

    public function all()
    {
        return $this->leaderRepository->all();
    }

    public function create(CreateLeaderDto $dto)
    {
        return $this->leaderRepository->create($dto);
    }
}
