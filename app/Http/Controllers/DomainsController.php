<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Domain; // Asegúrate de importar el modelo Domain
use App\Models\License;
use App\Http\Resources\LicenseResource;
use Illuminate\Support\Facades\Redirect; // Importa la clase Redirect

class DomainsController extends Controller
{

    public function index(Request $request,$licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());

        if($request->limit_exceeded==1){
            return Inertia::render('Pages/Domains', ['license' => $licenseResource,'limit_exceeded' => true]);
        }
        return Inertia::render('Pages/Domains', ['license' => $licenseResource]);
    }

    public function store(Request $request,$licenseId)
    {
        $license = License::findOrFail($licenseId);
        if($license->domains->count()>=$license->max_domains){
            return Redirect::route('dashboard.domains', ['licenseId' => $licenseId,'limit_exceeded' => true]);
        }
        $data = $request->validate([
            'name' => 'required|string',
            'active' => 'boolean',
        ]);

        $domain = new Domain($data);
        $license->domains()->save($domain);

        return Redirect::route('dashboard.domains', ['licenseId' => $licenseId]);
    }

    public function update(Request $request,$domainId)
    {
        $domain = Domain::findOrFail($domainId);
        $licenseId=$domain->license->id;
        $data = $request->validate([
            'name' => 'required|string',
            'active' => 'boolean',
        ]);

        $domain->update($data);

        return Redirect::route('dashboard.domains', ['licenseId' => $licenseId]);
    }

    public function destroy($domainId)
    {
        $domain = Domain::findOrFail($domainId);
        $licenseId =$domain->license->id;
        $domain->delete();

        return Redirect::route('dashboard.domains', ['licenseId' => $licenseId]);
    }
}