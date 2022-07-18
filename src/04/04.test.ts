import {cheapPredict} from "./04";

test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);//можно засунуть прямо внутрь функции
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})
test("should take courses chipper 160", () => {
    const courses = [
        {title: "css", price: 110,},
        {title: "JS", price: 200,},
        {title: "React", price: 150,},
    ]

    const cheapCurses = courses.filter(cheapPredict);
    expect(cheapCurses.length).toBe(2)
    expect(cheapCurses[0].title).toBe('css')
    expect(cheapCurses[1].title).toBe("React")

})

test("get only completed tasks", ()=>{
    const tasks =[
        {id: 1, title: "bread", isDone: false,},
        {id: 2, title: "milk", isDone: true,},
        {id: 3, title: "sold", isDone: false,},
        {id: 4, title: "sugar", isDone: true,},
    ]

    const tasksFilter = tasks.filter(task=>!task.isDone)
    expect(tasksFilter.length).toBe(2);
    expect(tasksFilter[0].id).toBe(1);
    expect(tasksFilter[1].id).toBe(3);
})