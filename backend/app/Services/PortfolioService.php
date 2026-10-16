<?php

namespace App\Services;

use App\Contracts\Repositories\EducationRepositoryInterface;
use App\Contracts\Repositories\ExperienceRepositoryInterface;
use App\Contracts\Repositories\ProfileRepositoryInterface;
use App\Contracts\Repositories\ProjectRepositoryInterface;
use App\Contracts\Repositories\SkillCategoryRepositoryInterface;

class PortfolioService
{
    public function __construct(
        private readonly ProfileRepositoryInterface $profiles,
        private readonly ExperienceRepositoryInterface $experiences,
        private readonly ProjectRepositoryInterface $projects,
        private readonly SkillCategoryRepositoryInterface $skillCategories,
        private readonly EducationRepositoryInterface $educations,
    ) {
    }

    public function overview(): array
    {
        return [
            'profile' => $this->profiles->first(),
            'experiences' => $this->experiences->all(),
            'projects' => $this->projects->all(),
            'skill_categories' => $this->skillCategories->all(),
            'educations' => $this->educations->all(),
        ];
    }
}
