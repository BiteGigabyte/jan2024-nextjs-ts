import React from "react";
import {Metadata} from "next";


export const generateMetadata = async ({params}: {params: {id: string}}): Promise<Metadata> => {
    let user: IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(value => value.json());

    return {
        title: user.email,
        description: user.email
    }
}

type Props = { children: React.ReactNode }

const UserLayout = ({children} : Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;