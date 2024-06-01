<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Dto\Leader\CreateLeaderDto;
use App\Dto\Leader\UpdateLeaderDto;
use App\Models\Leader;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class LeaderRepository
{
    public function __construct(
        public Leader $model
    )
    {
    }

    public function all(): Collection
    {
        return $this->model::all();
    }

    public function findById(int $id): ?Model
    {
        return $this->model::query()->find($id);
    }

    public function findByCpf(string $cpf): ?object
    {
        $leader = $this->model::query()
            ->where('cpf', $cpf)
            ->first();
        if (!$leader) {
            return null;
        }

        return $leader;
    }

    /**
     * @param CreateLeaderDto $dto
     * @return mixed
     */
    public function create(CreateLeaderDto $dto)
    {
        return $this->model->create($dto->toArray());
    }

    /**
     * @param UpdateLeaderDto $dto
     * @return Model|null
     */
    public function update(UpdateLeaderDto $dto): ?Model
    {
        $leader = $this->findById($dto->id);
        $leader?->update($dto->toArray());
        return $leader;
    }

    /**
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->model->findOrFail($id)->delete();
    }
}
