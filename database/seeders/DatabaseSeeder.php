<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Helpers\PluginHelper;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'username' => 'testUser',
            'email' => 'user@example.com',
        ]);


        $readmeFilePath = resource_path('plugins/readme.txt');
        $plugin = PluginHelper::extractPluginName($readmeFilePath);
        if ($plugin) {

            $pluginCreated=\App\Models\Plugin::factory()->create([
                'name' => $plugin->name,
                'readme_path' => $readmeFilePath,
            ]);

            \App\Models\License::factory(3)->create([
                'plugin_id'=>$pluginCreated->id
            ]);

        }


        // else {return response('Error extracting plugin name', 400);}


    }
}
