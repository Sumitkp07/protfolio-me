<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'profile' => $this->resource['profile']
                ? new ProfileResource($this->resource['profile'])
                : null,
            'experiences' => ExperienceResource::collection($this->resource['experiences']),
            'projects' => ProjectResource::collection($this->resource['projects']),
            'skill_categories' => SkillCategoryResource::collection($this->resource['skill_categories']),
            'educations' => EducationResource::collection($this->resource['educations']),
        ];
    }
}
