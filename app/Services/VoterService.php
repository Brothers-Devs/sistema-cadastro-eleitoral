<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\VoterRepository;

class VoterService
{
    public function __construct(
        protected VoterRepository $voterRepository
    ) {
    }

    public function all()
    {
        return $this->voterRepository->all();
    }
}
