<?php

namespace App\Repositories;

use App\Contracts\Repositories\SkillCategoryRepositoryInterface;
use App\Models\SkillCategory;
use Illuminate\Support\Collection;

class EloquentSkillCategoryRepository implements SkillCategoryRepositoryInterface
{
    public function all(): Collection
    {
        return SkillCategory::query()->orderBy('sort_order')->get();
    }
}
