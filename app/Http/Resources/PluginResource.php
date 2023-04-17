<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PluginResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'link' => $this->link,
            'icon' => $this->icon,
            'active' => $this->active,
        ];
    }
}
