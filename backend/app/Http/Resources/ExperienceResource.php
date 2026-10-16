<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExperienceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'company' => $this->company,
            'role' => $this->role,
            'location' => $this->location,
            'started_on' => $this->started_on->toDateString(),
            'ended_on' => $this->ended_on?->toDateString(),
            'is_current' => $this->ended_on === null,
            'highlights' => $this->highlights,
        ];
    }
}
