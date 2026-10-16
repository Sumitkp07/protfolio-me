<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'category' => $this->category,
            'summary' => $this->summary,
            'highlights' => $this->highlights,
            'technologies' => $this->technologies,
            'live_url' => $this->live_url,
            'period' => $this->period,
            'is_featured' => $this->is_featured,
        ];
    }
}
