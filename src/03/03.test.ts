import {studentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";


let student: studentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Nik",
        age: 30,
        isActive: false,
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
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");

})

test("students should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);//Сделай студента активным

    expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {
    let result1 = doesStudentLiveIn(student, "Moskov");//переменной student передаем Moskov
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})