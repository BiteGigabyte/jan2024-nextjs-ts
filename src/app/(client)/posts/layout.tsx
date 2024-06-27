import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostsLayout metaData'
}

type Props = { children: React.ReactNode }

const PostsLayout = ({children} : Props) => {
    return (
        <div>
        {children}
        </div>
    );
};

export default PostsLayout;