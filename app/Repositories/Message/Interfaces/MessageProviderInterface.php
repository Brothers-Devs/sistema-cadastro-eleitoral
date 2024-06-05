<?php

namespace App\Repositories\Message\Interfaces;

interface MessageProviderInterface
{
    public function send(): bool;
}
