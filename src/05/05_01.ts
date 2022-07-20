export type ManType = {
    name: string,
    age: number,
}
const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33,},
    {name: "Alexander Petrov", age: 24,},
    {name: "Dmitry Sidorov", age: 18,},
]

const dimychTransfomator = (man: ManType) => {
    return (
        {
            stack: ["css, html", "js", "tdd", "react"],
            firstName: man.name.split(" ")[0],
            lastName: man.name.split(" ")[1],
        }
    );
}

const devs1 = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov",
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov",
    },
]

const devs2 = [
    dimychTransfomator(people[0]),
    dimychTransfomator(people[1]),
    dimychTransfomator(people[2]),
]
const devs3 = people.map(dimychTransfomator)
const devs4 = people.map(man=> ({//сокращенная запись верхней
            stack: ["css, html", "js", "tdd", "react"],
            firstName: man.name.split(" ")[0],
            lastName: man.name.split(" ")[1],
}))

const messages = people.map(man=>`Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator `)
//сплит разделить по пробелу [0]- взять первое слово(Андрей)

export const greatGreetingMess =(people: ManType[])=>{
    return people.map(man=>`Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}