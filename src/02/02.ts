
export type LocalCityType = {
    title: string,
    countryTitle: string,
}
type addressType = {
    streetTitle: string,
    city: LocalCityType,
}
type technologiesTypeArr = {
    id: number,
    title: string,
}
export type studentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: addressType,
    technologies: technologiesTypeArr[],

}
export const student: studentType = {
    id: 1,
    name: "Nik",
    age: 30,
    isActive: true,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
           id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);
