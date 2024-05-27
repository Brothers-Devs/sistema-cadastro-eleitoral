<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\LeaderRepository;
use App\Repositories\VoterRepository;

class HomeService
{
    public function __construct(
        protected LeaderRepository $leaderRepository,
        protected VoterRepository $voterRepository
    ) {
    }

    public function total(): array
    {
        return [
            'total_leaders' => $this->leaderRepository->all()->count(),
            'total_voters' => $this->voterRepository->all()->count(),
        ];
    }
}
