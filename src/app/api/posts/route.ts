import connect from "@/utils/db"
import Post from "@/models/Post";
import { NextResponse } from "next/server";


export const GET = async(request: Request) => {
    try {
        await connect();
        const posts = await Post.find();
        return NextResponse.json(posts, {status: 200})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}

export const POST = async(request: Request) => {
    try {
        const body = await request.json();
        await connect();
        
        const newPost = new Post(body);
        await newPost.save();
        
        return NextResponse.json(newPost, {status: 201})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}
