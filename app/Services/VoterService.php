<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Voter\CreateVoterDto;
use App\Repositories\LeaderRepository;
use App\Repositories\VoterRepository;
use Illuminate\Support\Facades\DB;

class VoterService
{
    public function __construct(
        protected VoterRepository $voterRepository,
        protected LeaderRepository $leaderRepository
    ) {
    }

    public function all()
    {
        return $this->voterRepository->all();
    }

    public function findById(int $id)
    {
        return $this->voterRepository->findById($id);
    }

    public function create(CreateVoterDto $createVoterDto)
    {
        return DB::transaction(function () use ($createVoterDto) {
            $leader = $this->leaderRepository->model->firstOrCreate(
                ['cpf' => $createVoterDto->leader->cpf],
                $createVoterDto->leader->toArray()
            );
            $voter = $leader->voters()->create($createVoterDto->toArray());

            return $voter->with('leader')->get();
        });
    }
}
