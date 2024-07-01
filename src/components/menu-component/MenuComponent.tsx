import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>home</Link>
                </li>
                <li>
                    <Link href={'/users'}>users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>posts</Link>
                </li>
                <li>
                    <Link href={'/meals'}>meals</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;