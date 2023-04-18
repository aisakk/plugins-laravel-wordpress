<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
class PluginResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name' => $this->name,
            'description' => Str::limit($this->description,100, '...'),
            'link' => $this->link,
            'icon' => $this->icon,
            'active' => $this->active,
            'readme_path' => $this->readme_path,
            'price' => $this->price,
            'image' => $this->image,
            'is_new' => $this->is_new,
            'is_acquired' => $this->is_acquired,
            'rates' => $this->rates,
            'reviews' => $this->reviews,
            'active' => $this->active,
        ];
    }
}
