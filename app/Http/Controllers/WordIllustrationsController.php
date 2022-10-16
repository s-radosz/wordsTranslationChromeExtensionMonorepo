<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\WordIllustration;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class WordIllustrationsController extends Controller
{
    public function store(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $word_id = $request->wordId;
                $base64_image = $request->base64Image;
                
                $checkRecordExists = WordIllustration::where("word_id", $word_id)
                                                        ->count();

                if($checkRecordExists > 0) {
                    $updatedIllustration = WordIllustration::where("word_id", $word_id)
                                        ->update(array('base64_image' => $base64_image));

                    return response()->json(
                        ['result' => $updatedIllustration,
                        'message' => "Illustration updated"
                    ], 200);
                } else {
                    $newWordIllustration = new WordIllustration;
                    $newWordIllustration->word_id = $word_id;
                    $newWordIllustration->base64_image = $base64_image;
                    $newWordIllustration->save();

                    return response()->json(
                        ['result' => $newWordIllustration,
                        'message' => "New illustration added"
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

    public function findIllustration(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                $response = [
                    'status' => 'ERROR',
                    'message' => 'user not found',
                ];
                return response()->json($response, 403);
            } else {
                $word_id = $request->wordId;

                $checkRecordExists = WordIllustration::where("word_id", $word_id)
                                                        ->count();

                if($checkRecordExists > 0) {
                    $currentIllustration = WordIllustration::where("word_id", $word_id)->first();

                    return response()->json(
                        ['result' => $currentIllustration,
                        'message' => "New illustration added"
                    ], 200);
                }else {
                    return response()->json(
                        ['result' => "",
                        'message' => "New illustration added"
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
                $word_id = $request->wordId;

                $illustration = WordIllustration::where("word_id", $word_id)->delete();

                return response()->json(
                    ['result' => $illustration
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
} 
