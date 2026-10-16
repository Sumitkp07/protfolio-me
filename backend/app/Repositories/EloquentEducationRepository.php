<?php

namespace App\Repositories;

use App\Contracts\Repositories\EducationRepositoryInterface;
use App\Models\Education;
use Illuminate\Support\Collection;

class EloquentEducationRepository implements EducationRepositoryInterface
{
    public function all(): Collection
    {
        return Education::query()->orderByDesc('ended_on')->get();
    }
}
