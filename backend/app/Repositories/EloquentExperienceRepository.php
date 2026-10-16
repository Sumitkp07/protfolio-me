<?php

namespace App\Repositories;

use App\Contracts\Repositories\ExperienceRepositoryInterface;
use App\Models\Experience;
use Illuminate\Support\Collection;

class EloquentExperienceRepository implements ExperienceRepositoryInterface
{
    public function all(): Collection
    {
        return Experience::query()->orderBy('sort_order')->get();
    }
}
