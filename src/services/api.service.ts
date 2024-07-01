const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: number) => base + urlBuilder.userBaseUrl + '/' +id,

}

const userService = {

    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(
            urlBuilder.allUsers(),
            // {cache: 'no-store'} // SSR
            // {cache: 'force-cache'} // SSG
            {next: {revalidate: 60}} // ISR
        ).then(value => value.json());
        return users;
    }
}

export {
    userService
}