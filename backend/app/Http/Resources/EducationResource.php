<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EducationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'degree' => $this->degree,
            'institution' => $this->institution,
            'started_on' => $this->started_on->toDateString(),
            'ended_on' => $this->ended_on->toDateString(),
            'grade' => $this->grade,
        ];
    }
}
