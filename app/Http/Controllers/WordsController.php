<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;
use App\User;
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

                $user = User::where('id', $userId)
                                ->first();

                $words = Word::where('user_id', $userId)
                                ->whereNotNull($user->translate_from)
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

    private function checkWordAssignedToUser($userId, $word, $translatedWord, $userTranslateFrom) {
        $wordExisted = Word::where(
            [
                ['user_id', $userId], 
                ['en', $word],
                [$userTranslateFrom, $translatedWord]
            ]
        )->count();

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
                $enWord = $request->enWord;
                $translatedWord = $request->translatedWord;
                $userTranslateFrom = $request->userTranslateFrom;

                $checkWordAssigned = $this->checkWordAssignedToUser(
                    $userId, 
                    $enWord, 
                    $translatedWord,
                    $userTranslateFrom
                );

                if($checkWordAssigned === 0) {
                    // if user does't have specific translate_from -> en
                    // pair in words table then I check if user have some language -> en 
                    // pair in words table and if user has that then I only update translate_from column
                    // in other case I create new record for that en word 
                    $wordAssignedInDifferentTranslateFrom = Word::where(
                        [
                            ['user_id', $userId], 
                            ['en', $enWord]
                        ]
                    )->count();

                    if($wordAssignedInDifferentTranslateFrom === 0) {
                        $word = new Word;

                        $word->user_id = $userId;
                        $word->en = $enWord;
                        $word->$userTranslateFrom = $translatedWord;
                        $word->success_answers_count = 0;
                        $word->failure_answers_count = 0;
                
                        $word->save();
                
                        return response()->json(
                            ['result' => $word
                        ], 200);
                    } else {
                        $word = Word::where([
                            ['user_id', $userId], 
                            ['en', $enWord]
                        ])->update(array($userTranslateFrom => $translatedWord));
            
                        return response()->json(
                            ['result' => $word
                        ], 200);
                    }
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
                $userTranslateFrom = $request->userTranslateFrom;
                $id = $request->id;

                $word = Word::where('id', $id)
                    ->update(array($userTranslateFrom => null));

                // $word = Word::find($id);
                // $word->delete();

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
