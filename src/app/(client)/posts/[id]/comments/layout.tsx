import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostCommentsLayout metaData'
}

type Props = { children: React.ReactNode }

const PostCommentsLayout = ({children} : Props) => {
    return (
        <>
        {children}
        </>
    );
};

export default PostCommentsLayout;