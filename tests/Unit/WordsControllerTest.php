<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WordsControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    /**
     * GET /words/all/1
     *
     */
   
    public function testReturnWordsList()
    {
        $response = $this->json('GET', '/words/all/1');
        $response->assertStatus(200);
    }
}
