<?php

namespace App\Contracts\Repositories;

use App\Models\Profile;

interface ProfileRepositoryInterface
{
    public function first(): ?Profile;
}
