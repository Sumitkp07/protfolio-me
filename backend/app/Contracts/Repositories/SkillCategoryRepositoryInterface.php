<?php

namespace App\Contracts\Repositories;

use Illuminate\Support\Collection;

interface SkillCategoryRepositoryInterface
{
    public function all(): Collection;
}
