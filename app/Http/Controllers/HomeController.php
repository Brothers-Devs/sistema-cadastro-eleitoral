<?php

namespace App\Http\Controllers;

use App\Services\HomeService;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        protected HomeService $homeService
    ) {
    }

    public function index()
    {
        $total = $this->homeService->total();

        return Inertia::render('Home', [
            'total' => $total
        ]);
    }
}
