<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all blogs
        return Blogs::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //store new blog
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'owner_name' => 'required',
            'owner_username' => 'required',
        ]);

        return Blogs::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //search blog
        return Blogs::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //update blog

        //get the blog id and the data in the database
        $blog = Blogs::find($id);
        //once the id is found update the blog
        $blog->update($request->all());

        return $blog;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //delete blog
        return Blogs::destroy($id);
    }



    /**
    * Search multiple resource from the storage
    *
    * @param  string  $title
    * @return \Illuminate\Http\Response
    */
    public function search($title)
    {
        //multiple research
        return Blogs::where('title', 'like', '%'.$title.'%')->get();
    }


    public function searchBlogUser($username)
    {
        //multiple research
        //return Blogs::where('owner_username', '=', '%'.$username.'%')->get();
        return Blogs::where('owner_username', $username)->get();
    }
}
