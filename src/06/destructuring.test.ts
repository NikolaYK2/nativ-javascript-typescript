import {manType} from "./Destructuring";

let props: manType;
beforeEach(()=>{
    props = {
        name:"Nik",
        age: 30,
        lessons: [{title:"1"}, {title: '2'},{title: '3'},]
    }
})

test('Object', ()=> {
//Можно заменить одной строчкой
    let {age: a, lessons: l} = props;
//         //Хотим создать две переменные
//     //{} - те значения что в скобках, мы хотим поискать в обьектe props и присвоить двум переменным age; lessons
//     const {age, lessons} = props;
    const {title} = props.lessons[0];

    // expect(age).toBe(30);
    // expect(lessons.length).toBe(2);
    expect(title).toBe('1');
})
test('Array', ()=>{
    //  const lessons1 = props.lessons[0];
    // const lessons2 = props.lessons[1];

    const [lessons1, ...restLessons] = props.lessons
    expect(lessons1.title).toBe("1")
    expect(restLessons.length).toBe(2)
    expect(restLessons).toStrictEqual([{title: '2'}, {title: '3'}])
})