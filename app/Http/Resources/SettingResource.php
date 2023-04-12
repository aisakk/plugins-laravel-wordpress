<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'meta_key' => $this->meta_key,
            'meta_value' => json_decode($this->meta_value),
            'license_id' => $this->license_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
