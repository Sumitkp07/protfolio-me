<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Services\PortfolioService;

class PortfolioController extends Controller
{
    public function __construct(private readonly PortfolioService $portfolio)
    {
    }

    public function __invoke(): PortfolioResource
    {
        return new PortfolioResource($this->portfolio->overview());
    }
}
