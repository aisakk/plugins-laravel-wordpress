<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Helpers\PluginHelper;
use App\Models\User;
use App\Models\License;
use App\Models\Plugin;
use App\Models\Domain;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'username' => 'testUser',
            'email' => 'user@example.com',
        ]);

        $readmeFilePath = resource_path('plugins');
        $plugins = PluginHelper::extractPluginNames($readmeFilePath);
        if ($plugins) {
            foreach($plugins as $plugin){
                $pluginCreated=Plugin::factory()->create([
                    'name' => $plugin->name,
                    'readme_path' => $readmeFilePath,
                ]);
                License::factory(3)->create([
                    'plugin_id' => $pluginCreated->id,
                ])->each(function ($license) {
                    Domain::factory(4)->create([
                        'license_id' => $license->id,
                    ]);
                });
            }
        }

    }
}
