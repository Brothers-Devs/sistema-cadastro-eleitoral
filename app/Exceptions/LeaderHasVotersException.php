<?php

namespace App\Exceptions;

use Exception;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class LeaderHasVotersException extends Exception
{
    public function __construct(
        string     $message = "Líder possui eleitores vinculados e não pode ser excluído.",
        int        $code = Response::HTTP_CONFLICT,
        ?Throwable $previous = null
    )
    {
        parent::__construct($message, $code, $previous);
    }
}
