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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table->string('product');
            $table->string('payment_method')->nullable();
            $table->decimal('total')->nullable();
            $table->string('status')->nullable();

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
        Schema::dropIfExists('payments');
    }
};
