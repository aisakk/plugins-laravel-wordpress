<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Helpers\PluginHelper;
use App\Models\User;
use App\Models\License;
use App\Models\Plugin;
use App\Models\Domain;
use App\Models\LicenseMeta;
use App\Models\Notifications;
use App\Models\TypeLicense;
use Faker\Factory as Faker;
use Illuminate\Support\Str;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $typeLicenses = ['Basic', 'Advanced', 'Premium'];
        $faker = Faker::create();
        foreach ($typeLicenses as $typeLicense) {
            TypeLicense::create([
                'type_license' => $typeLicense
            ]);
        }

        User::factory()->create([
            'username' => 'testUser',
            'email' => 'user@example.com',
        ]);

        // $readmeFilePath = resource_path('plugins');
        // $plugins = PluginHelper::extractPluginNames($readmeFilePath);


        $plugins = Plugin::factory(6)->create();
        $plugins=Plugin::all();
        foreach($plugins as $plugin){
            License::factory(3)->create([
                'plugin_id' => $plugin->id,
                'type_license_id' => $faker->randomElement(TypeLicense::pluck('id')->toArray()), // Selecciona un tipo de licencia aleatoriamente
                'code_verify' => Str::random(16)
            ])->each(function ($license) {
                Domain::factory($license->max_domains)->create([
                    'license_id' => $license->id,
                ]);

                // Añade las notificaciones aquí
                $user = User::first();
                Notifications::create([
                    'link' => '/plugins/' . $license->plugin_id . '/dashboard',
                    'description_notify' => 'Licencia creada',
                    'type_action' => 'new',
                    'user_id' => $user->id,
                    'start_at' => now(),
                ]);
            });
        }


        // ...
        // ...
        // ...

        $licenses = License::all();
        foreach ($licenses as $lic) {
            LicenseMeta::create([
                "meta_key" => "btn_settings",
                "meta_value" => "{\"contentButtons\":[{\"id\":\"0\",\"nombreButton\":\"Button 0\",\"labelText\":\"Contact us\",\"facebook\":null,\"whatsapp\":null,\"instagram\":null,\"email\":null,\"phone\":\"+5843254321\",\"link\":\"https:\\/\\/wa.me\\/\",\"icon\":\"whatsapp\",\"cssDesign\":{\"buttonDesign\":{\"backgroundColor\":\"red\",\"borderRadius\":{\"pc\":[\"05\",\"05\",\"08\",\"08\"],\"tablet\":[\"10\",\"0\",\"0\",\"0\"],\"movil\":[\"15\",\"0\",\"0\",\"0\"]},\"padding\":{\"pc\":[\"05\",\"0\",\"0\",\"00\"],\"tablet\":[\"10\",\"0\",\"0\",\"0\"],\"movil\":[\"15\",\"0\",\"0\",\"0\"]},\"margin\":{\"pc\":[\"0\",\"0\",\"0\",\"0\"],\"tablet\":[\"0\",\"0\",\"0\",\"0\"],\"movil\":[\"0\",\"0\",\"0\",\"0\"]},\"areaPadding\":{\"desktop\":\"05\",\"tablet\":\"05\",\"mobile\":\"05\"}},\"labelDesign\":{\"backgroundColor\":null,\"color\":null,\"fontFamily\":null,\"borderRadius\":{\"pc\":[\"05\",\"05\",\"08\",\"08\"],\"tablet\":[\"10\",\"0\",\"0\",\"0\"],\"movil\":[\"15\",\"0\",\"0\",\"0\"]},\"fontSize\":{\"pc\":[\"20\"],\"tablet\":[\"20\"],\"movil\":[\"24\"]},\"padding\":{\"pc\":[\"0\",\"0\",\"0\",\"0\"],\"tablet\":[\"0\",\"0\",\"0\",\"0\"],\"movil\":[\"0\",\"0\",\"0\",\"0\"]},\"margin\":{\"pc\":[\"0\",\"0\",\"0\",\"0\"],\"tablet\":[\"0\",\"0\",\"0\",\"0\"],\"movil\":[\"0\",\"0\",\"0\",\"0\"]}},\"iconDesign\":{\"color\":\"white\",\"iconSize\":\"30\",\"fontSize\":{\"pc\":[\"0\"],\"tablet\":[\"0\"],\"movil\":[\"0\"]},\"padding\":{\"pc\":[\"0\",\"0\",\"0\",\"0\"],\"tablet\":[\"0\",\"0\",\"0\",\"0\"],\"movil\":[\"0\",\"0\",\"0\",\"0\"]},\"margin\":{\"pc\":[\"0\",\"0\",\"0\",\"0\"],\"tablet\":[\"0\",\"0\",\"0\",\"0\"],\"movil\":[\"0\",\"0\",\"0\",\"0\"]}},\"containerDesign\":{\"position\":null,\"top\":null,\"right\":null,\"left\":null,\"bottom\":null}}}]}",
                "license_id" => $lic->id
            ]);
        }

    }
}
