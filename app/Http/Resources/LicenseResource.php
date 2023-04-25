<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class LicenseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $expirationDate = Carbon::createFromFormat('Y-m-d', $this->expiration)->format('d M Y');

        return [
            'id' => $this->id,
            'date' => $this->created_at->format('d M Y'),
            'code' => $this->licence_key,
            "type_license" => $this->type_license_id,
            'pluginName' => $this->plugin->name,
            'expiration' => $expirationDate,
            'domains' => $this->domainsOrderedDesc,
            'settings'=> $this->settings,
            'status' => $this->status ? 'Active' : 'Inactive',
        ];
    }
}
