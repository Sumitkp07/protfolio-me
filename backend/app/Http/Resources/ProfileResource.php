<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'title' => $this->title,
            'tagline' => $this->tagline,
            'summary' => $this->summary,
            'email' => $this->email,
            'phone' => $this->phone,
            'location' => $this->location,
            'github_url' => $this->github_url,
            'linkedin_url' => $this->linkedin_url,
            'resume_url' => $this->resume_url,
            'years_experience' => $this->years_experience,
        ];
    }
}
