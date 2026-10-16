<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_valid_message_is_stored(): void
    {
        $this->postJson('/api/v1/contact', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'message' => 'Hello, I would like to work with you.',
        ])->assertCreated();

        $this->assertDatabaseHas('contact_messages', ['email' => 'jane@example.com']);
    }

    public function test_invalid_message_is_rejected(): void
    {
        $this->postJson('/api/v1/contact', ['name' => '', 'email' => 'bad', 'message' => 'short'])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'email', 'message']);
    }
}
