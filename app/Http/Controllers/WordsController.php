<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class WordsController extends Controller
{
    public function index(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $userId = $request->userId;

                $words = Word::where('user_id', $userId)
                                ->latest()
                                ->paginate(15);
        
                return response()->json(
                    ['result' => $words
                ], 200);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }

    private function checkWordAssignedToUser($userId, $word) {
        $wordExisted = Word::where([['user_id', $userId], ['en', $word]])->count();

        return $wordExisted;
    }

    public function store(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $userId = $request->userId;
                $en = $request->en;
                $pl = $request->pl;

                $checkWordAssigned = $this->checkWordAssignedToUser($userId, $en);

                if($checkWordAssigned === 0) {
                    $word = new Word;

                    $word->user_id = $userId;
                    $word->en = $en;
                    $word->pl = $pl;
                    $word->success_answers_count = 0;
                    $word->failure_answers_count = 0;
            
                    $word->save();
            
                    return response()->json(
                        ['result' => $word
                    ], 200);
                } else {
                    return response()->json(
                        ['result' => "Exist"
                    ], 200);
                }
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }

    public function remove(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $id = $request->id;

                $word = Word::find($id);
                $word->delete();

                return response()->json(
                    ['result' => $word
                ], 200);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }

    public function getRandomWordToTest(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $status = $request->status;
                $count = $request->count;
                $userId = $request->userId;

                $words = Word::where([['status', $status], ['user_id', $userId]])
                                ->with('illustration')
                                ->inRandomOrder()
                                ->take($count)
                                ->get();

                return response()->json(
                    ['result' => $words
                ], 200);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }

    public function checkSelectedOption(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $word_id = $request->wordId;
                $translation = $request->selectedTranslation;

                $word = Word::where('id', $word_id)
                                ->first();

                if($word->pl === $translation) {
                    Word::where('id', $word_id)
                            ->increment('success_answers_count');

                    return response()->json(
                        ['result' => "success"
                    ], 200);
                } else {
                    Word::where('id', $word_id)
                            ->increment('failure_answers_count');

                    return response()->json(
                        ['result' => "failure"
                    ], 200);
                }
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token expired',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token invalid',
            ];
            return response()->json($response, 401);
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            $response = [
                'status' => 'ERROR',
                'message' => 'token absent',
            ];
            return response()->json($response, 401);
        }
    }
}
