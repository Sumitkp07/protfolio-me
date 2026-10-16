<?php

namespace App\Repositories;

use App\Contracts\Repositories\ProfileRepositoryInterface;
use App\Models\Profile;

class EloquentProfileRepository implements ProfileRepositoryInterface
{
    public function first(): ?Profile
    {
        return Profile::query()->first();
    }
}
