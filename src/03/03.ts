import {studentType} from "../02/02";
import {CityType, governmentBuildingsType, housesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}
export const addSkill = (st: studentType, skill: string) => {
    //(student: studentType,- студенту добавляем(передаем) скилл - skill: string)
    //st - название параметра(переменной), то как обькта зовут внутри функции, каждый элемент обьекта.
    // Мы передаем конкретный обьект,а не весь student

    //student - внешнее название, весь обьект
    st.technologies.push({
        id: new Date().getTime(),//getTime - вернется большое число
        title: skill,
    })
}

export function makeStudentActive(s: studentType) {
    s.isActive = true;
}


export const doesStudentLiveIn =(s: studentType, cityName: string) => {
    //s - можно и student именя не имеют знаечния
    //cityName(название города)
    return s.address.city.title === cityName;
    //Равен ли город внутри student годору который передан cityName
    //cityName = Moskov / cityName = Minsk
}

//============================== Budget Hospital FIRE STATION=======================
export const addMoneyToBudget = (building: governmentBuildingsType, budget: number)=> {
    building.budget += budget;
}
export const repairHouse = (house: housesType) => {
    house.repaired = true
}
//==========================staff================================
//====increased
export const toFireStaff = (staff: governmentBuildingsType, staffCount: number) => {
    staff.staffCount -= staffCount;
}
//=====repaired
export const toHireStaff = (staff: governmentBuildingsType, staffCount: number)=> {
    staff.staffCount += staffCount;
}

//======================greeting===========================
export  function createMessage(city: CityType) {
    // return "Hello " + city.title + " citizens";
    return `Hello ${city.title} citizens`;//альтернатива, даже лучше, используем обратные кавычки
}
