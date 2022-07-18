export const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => /*{return (*/age > 90/*)}*///сокращенная запись если функция короткая такая

export const oldAges = [100];//> 90

type CourseType={
    title:string,
    price:number,
}
export const courses = [
    {title: "css", price: 110,},
    {title: "JS", price: 200,},
    {title: "React", price: 150,},
]

export const cheapPredict =(course: CourseType)=>/*{return (*/course.price < 160/*)}*///то же запись сократили
export const cheapCurses = [
    {title: "css", price: 110,},
    {title: "React", price: 150,},
];