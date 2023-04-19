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
            $table->dropColumn('readme_path');
            $table->text('description')->after('name')->nullable();
            $table->decimal('price')->after('description');
            $table->boolean('is_new')->after('price');
            $table->boolean('is_acquired')->after('is_new');
            $table->text('images')->after('is_acquired');
            $table->text('pricing')->after('images');
            $table->text('plugin_info')->after('pricing');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('plugins', function (Blueprint $table) {
            // $table->string('readme_path');
            $table->dropColumn([
                'description',
                'price',
                'is_new',
                'is_acquired',
                'images',
                'pricing',
                'plugin_info'
            ]);
        });
    }
};
