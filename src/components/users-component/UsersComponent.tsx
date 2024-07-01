import React, {FC} from 'react';
import Link from "next/link";

import {userService} from "@/services/api.service";


const UsersComponent: FC = async () => {

    // let users = await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json());

   let users = await userService.getAllUsers();
    console.log(users);

    return (
        <div>
            <ul>
                {
                    users.map((user: IUser) => (
                        <li key={user.id}><Link href={`/users/${user.id}`}>{user.id}: {user.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;