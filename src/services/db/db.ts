import sql from 'better-sqlite3';

let db = sql('meals.db');

const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[];
}

export {
    getMeals
}