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
        Schema::table('plugins', function (Blueprint $table) {
            $table->text('description')->after('name')->nullable();
            $table->decimal('price')->after('description');
            $table->string('image')->after('price');
            $table->boolean('is_new')->after('image');
            $table->boolean('is_acquired')->after('is_new');
            // $table->date('expires_on')->after('is_acquired'); $plugin->licenses($licenceId)->expiration?
            $table->integer('rates')->after('is_acquired');
            $table->integer('reviews')->after('rates');
            $table->boolean('active')->default(false);
            $table->string('link')->after('active')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('plugins', function (Blueprint $table) {
            $table->dropColumn([
                'description',
                'price',
                'image',
                'is_new',
                'is_acquired',
                'rates',
                'reviews',
                'active'
            ]);
        });
    }
};
