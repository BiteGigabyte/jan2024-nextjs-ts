import React from 'react';
import Link from "next/link";

const PostsComponent = async () => {

    let posts: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    return (
        <div>
            {posts.map(post => <div key={post.id}><Link href={`/posts/${post.id}/comments`}>{post.id}: {post.title};</Link></div>)}
        </div>
    );
};

export default PostsComponent;