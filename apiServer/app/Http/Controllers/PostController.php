<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $title = $request->title;
        $content = $request->content;

        //DB에 저장
        $post = new Post();
        $post->title = $title;
        $post->content = $content;


        $post->save();
        return $post;
    }

    public function index()
    {
        $posts = Post::all();
        return $posts;
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();

        return 'success';
    }

    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
    }
}
