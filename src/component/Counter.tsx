import React, {useState} from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={classes.wrapper}>
        <h1>{count}</h1>
            <button className={classes.button} onClick={()=>setCount(count+1)}>Добавить</button>
            <button className={classes.button} onClick={()=>setCount(count-1)}>Убавить</button>
        </div>
    );
};

