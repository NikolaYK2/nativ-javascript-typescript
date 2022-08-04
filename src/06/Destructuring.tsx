import React from 'react';

type lessonsType={
    title: string
}
export type manType ={
    name:string,
    age: number,
    lessons: lessonsType[],
}

type DestructuringType={
    man: manType,
    food: string,
    car: {model: string},
}
export const Destructuring: React.FC<DestructuringType> = (props) => {
    //то есть, достань из объекта что придет сюда man, а все остальное запихни в props
    let man = props.man
    const {name, age, ...restProps} = man;
    return (
        <div>
            <div>{props.car.model},{props.food}</div>
            <h1>{name}</h1>
            <hr/>
            <div>{age}</div>
        </div>
    );
};
