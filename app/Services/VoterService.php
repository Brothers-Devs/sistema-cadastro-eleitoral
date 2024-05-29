<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Voter\CreateVoterDto;
use App\Dto\Voter\UpdateVoterDto;
use App\Models\Leader;
use App\Repositories\LeaderRepository;
use App\Repositories\VoterRepository;
use Illuminate\Support\Facades\DB;

class VoterService
{
    public function __construct(
        protected VoterRepository  $voterRepository,
        protected LeaderRepository $leaderRepository
    )
    {
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

    public function update(UpdateVoterDto $updateVoterDto)
    {
        return DB::transaction(function () use ($updateVoterDto) {
            /** @var Leader $leader */
            $leader = $this->leaderRepository->model->firstOrCreate(
                ['cpf' => $updateVoterDto->leader->cpf],
                $updateVoterDto->leader->toArray()
            );

            if ($leader) {
                $voter = $leader->voters()->find($updateVoterDto->id);
                $voter->update($updateVoterDto->toArray());
            }
        });
    }

    /**
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->voterRepository->delete($id);
    }
}
