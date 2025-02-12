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
        Schema::create('license_meta', function (Blueprint $table) {
            $table->id();
            $table->string('meta_key');
            $table->text('meta_value');

            $table->unsignedBigInteger('license_id');
            $table->foreign('license_id')->references('id')->on('licenses')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('license_meta');
    }
};
