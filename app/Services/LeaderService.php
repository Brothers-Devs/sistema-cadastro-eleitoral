<?php

declare(strict_types=1);

namespace App\Services;

use App\Dto\Leader\CreateLeaderDto;
use App\Dto\Leader\UpdateLeaderDto;
use App\Repositories\LeaderRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class LeaderService
{
    public function __construct(
        protected LeaderRepository $leaderRepository
    )
    {
    }

    /**
     * @return Collection
     */
    public function all(): Collection
    {
        return $this->leaderRepository->all();
    }

    /**
     * @param int $id
     * @return Model|null
     */
    public function findById(int $id): ?Model
    {
        return $this->leaderRepository->findById($id);
    }

    /**
     * @param string $cpf
     * @return object|null
     */
    public function findByCpf(string $cpf): object|null
    {
        return $this->leaderRepository->findByCpf($cpf);
    }

    /**
     * @param CreateLeaderDto $dto
     * @return mixed
     */
    public function create(CreateLeaderDto $dto): mixed
    {
        return $this->leaderRepository->create($dto);
    }

    /**
     * @param UpdateLeaderDto $dto
     * @return Model|null
     */
    public function update(UpdateLeaderDto $dto): ?Model
    {
        return $this->leaderRepository->update($dto);
    }

    /**
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->leaderRepository->delete($id);
    }
}
