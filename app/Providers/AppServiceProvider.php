<?php

namespace App\Providers;

use App\Repositories\Message\Interfaces\MessageProviderInterface;
use App\Repositories\Message\Providers\Whatsapp\EvolutionApiRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(MessageProviderInterface::class, EvolutionApiRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
