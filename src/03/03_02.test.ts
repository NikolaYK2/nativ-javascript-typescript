import { CityType } from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;


beforeEach(() => {//Говорим что-б перед каждым новым тестом,
                    // функция перезатиерала(как бы по умолчанию) знаечния переменных
    city = {
        title: "New York",
        houses: [
            {buildedAt: 2012, repaired: false,
            address: { number: 100,
                        street: {title:"White street"}}},
            {buildedAt: 2008, repaired: false,
            address: { number: 100,
                        street: {title:"Happy street"}}},
            {buildedAt: 2020, repaired: false,
            address: { number: 101,
                        street: {title:"Happy street"}}},
                    ],
        governmentBuildings: [
            {type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {street: {title:"Central str",}},
            },
            {type: "FIRE STATION",
                budget: 500000,
                staffCount: 1000,
                address: {street: {title:"South str",}},
            },

        ],
        citizensNumber: 1000000,
    }
});
// 01. дополните тип GovernmentBuildingsType2
//1. создайте в отдельном файле функцию, что бы тесты ниже прошли
test("Budget should be changed for HOSPITAL", () => {
//test.skip- пропустить тест
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

//01 создайте в том же файлу еще одну функцию, что бы тесты прошли
test("Houses should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();// или записать как toBe(true)

});

//01.создайте в том же файле еще одну функцию, что-бы тесты прошли
test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
test("staff should be repaired", () => {
    toHireStaff(city.governmentBuildings[0], 20);
    toFireStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(900);
})
test("greeting message should be corrected for city", () => {
    // const message = createMessage(city);

    //можно записать сокращенно
    expect(createMessage(city)).toBe("Hello New York citizens");
})

