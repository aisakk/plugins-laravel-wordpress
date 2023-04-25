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
        Schema::create('licenses', function (Blueprint $table) {
            $table->id();
            $table->string('licence_key');
            $table->unsignedBigInteger('type_license_id'); // Agrega la columna type_license_id después de la columna id
            $table->boolean('status')->default(false);
            $table->string('code_verify');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('plugin_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('plugin_id')->references('id')->on('plugins')->onDelete('cascade');
            $table->foreign('type_license_id')->references('id')->on('type_licenses')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licenses');
    }
};
