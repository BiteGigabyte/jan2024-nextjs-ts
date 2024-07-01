import React from 'react';

import {addMeal} from "@/services/db/db";

const FormComponent = () => {
    return (
        <form action={addMeal}>
            <input type="text" name={'title'}/>
            <input type="text" name={'creator'}/>
            <input type="text" name={'image'}/>
            <input type="text" name={'slug'}/>
            <input type="text" name={'summary'}/>
            <input type="text" name={'instruction'}/>
            <input type="text" name={'creator-email'}/>
            <button>save meal</button>
        </form>
    );
};

export default FormComponent;