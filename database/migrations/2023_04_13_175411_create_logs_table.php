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
        Schema::create('logs', function (Blueprint $table) {
            $table->id();

            $table->string('action_name');
            $table->string('action_details')->nullable();
            $table->text('action_data')->nullable();
            $table->string('action_result')->nullable();

            $table->unsignedBigInteger('license_id');
            $table->foreign('license_id')
            ->references('id')
            ->on('licenses')
            ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logs');
    }
};
