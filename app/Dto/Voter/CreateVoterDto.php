<?php

declare(strict_types=1);

namespace App\Dto\Voter;

use App\Http\Requests\StoreUpdateVoterRequest;

class CreateVoterDto
{
    public function __construct(
        public string $name,
        public ?string $dateOfBirth,
        public ?string $rg,
        public string $cpf,
        public string $phone,
        public ?string $titleNumber,
        public ?string $zone,
        public ?string $session,
        public ?string $address,
        public ?string $zipCode,
        public ?string $neighborhood,
        public ?string $city,
        public int $leaderId,
    ) {
    }

    /**
     * @param StoreUpdateVoterRequest $request
     * @return CreateVoterDto
     */
    public static function makeFromRequest(StoreUpdateVoterRequest $request): CreateVoterDto
    {
        return new self(
            name: $request->name,
            dateOfBirth: $request->date_of_birth,
            rg: $request->rg,
            cpf: $request->cpf,
            phone: $request->phone,
            titleNumber: $request->title_number,
            zone: $request->zone,
            session: $request->input('session'),
            address: $request->address,
            zipCode: $request->zip_code,
            neighborhood: $request->neighborhood,
            city: $request->city,
            leaderId: $request->leader['id'] ?? $request->leader_id
        );
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'date_of_birth' => $this->dateOfBirth,
            'rg' => $this->rg,
            'cpf' => $this->cpf,
            'phone' => $this->phone,
            'title_number' => $this->titleNumber,
            'zone' => $this->zone,
            'session' => $this->session,
            'address' => $this->address,
            'zip_code' => $this->zipCode,
            'neighborhood' => $this->neighborhood,
            'city' => $this->city,
            'leader_id' => $this->leaderId
        ];
    }
}
