import React, {FC} from 'react';


interface IProps {
    params: { id: string}
}

const PostCommentPage:FC<IProps> = async ({params: {id}}) => {

    let comments: IComment[] = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(value => value.json());

    return (
        <div>
            {comments.map(comment => <div key={comment.id}>{comment.id}: {comment.name};</div>)}
        </div>
    );
};

export default PostCommentPage;