<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\VoterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/voters', [VoterController::class, 'list'])->name('voters.list');
Route::get('/voters/{id}', [VoterController::class, 'findById'])->name('voters.findById');
Route::post('/voters', [VoterController::class, 'create'])->name('voters.create');
Route::put('/voters/{id}', [VoterController::class, 'update'])->name('voters.update');
Route::delete('/voters/{id}', [VoterController::class, 'delete'])->name('voters.delete');
