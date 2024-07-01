'use server' //top level server directive (всі функції являються серверними)


import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

let db = sql('meals.db');

const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[];
}

const addMeal = async (formData: FormData): Promise<void> => {
    // 'use server' //line level server directive

    db
        .prepare('insert into meals(slug, title, image, summary, instructions, creator, creator_email) values (?,?,?,?,?,?,?)')
        .run(
            formData.get('slug'),
            formData.get('title'),
            formData.get('image'),
            formData.get('summary'),
            formData.get('instructions'),
            formData.get('creator'),
            formData.get('creator_email')
        );
        // revalidatePath('/meals', 'layout');   //2 аргумент це на якому рівні рендерити (автоматично рендерить на рівні на якому знаходитесь)
        // revalidatePath('/meals', 'page');     //2 аргумент це на якому рівні рендерити (автоматично рендерить на рівні на якому знаходитесь)
        revalidatePath('/meals');
}

export {
    getMeals,
    addMeal
}