import React, {FC} from 'react';

interface IProps {
    params: { id: string}
}

const Page:FC<IProps> = async ({params: {id}}) => {

    let user: IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json());

    return (
        <div>
            {user.id}: {user.name}; {user.email}
        </div>
    );
};

export default Page;