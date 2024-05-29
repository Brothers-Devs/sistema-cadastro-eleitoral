<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voters', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('date_of_birth', 10)->nullable();
            $table->string('rg', 10)->nullable();
            $table->string('cpf', 11);
            $table->string('phone', 14);
            $table->string('title_number', 45)->nullable();
            $table->string('zone', 45)->nullable();
            $table->string('session', 5)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('zip_code', 8)->nullable();
            $table->string('neighborhood', 255)->nullable();
            $table->string('city', 100)->nullable();
            $table->foreignId('leader_id')->index()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voters');
    }
};
