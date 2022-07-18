import {CityType} from "./02_02";
import {deleteHouse, getBuildingsWithStaffCountGreaterThen} from "../04/04_2";

let city: CityType;


beforeEach(() => {//Говорим что-б перед каждым новым тестом,
                    // функция перезатиерала(как бы по умолчанию) знаечния переменных
    // city = {
    //     title: "New York",
    //     houses: [
    //         {buildedAt: 2012, repaired: false,
    //         address: { number: 100,
    //                     street: {title:"White street"}}},
    //         {buildedAt: 2008, repaired: false,
    //         address: { number: 100,
    //                     street: {title:"Happy street"}}},
    //         {buildedAt: 2020, repaired: false,
    //         address: { number: 101,
    //                     street: {title:"Happy street"}}},
    //                 ],
    //     governmentBuildings: [
    //         {type: "HOSPITAL",
    //             budget: 200000,
    //             staffCount: 200,
    //             address: {street: {title:"Central str",}},
    //         },
    //         {type: "FIRE STATION",
    //             budget: 500000,
    //             staffCount: 1000,
    //             address: {street: {title:"South str",}},
    //         },
    //
    //     ],
    //     citizensNumber: 1000000,
    // }
// });
city = {
        title: "New York",
        houses: [
            {id:1, buildedAt: 2012, repaired: false,
            address: { number: 100,
                        street: {title:"White street"}}},
            {id:2, buildedAt: 2008, repaired: false,
            address: { number: 100,
                        street: {title:"Happy street"}}},
            {id:3, buildedAt: 2020, repaired: false,
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
//1. Дополните тип HouseType, добавьте порядковый id от 1 и по возрастанию
//2. создайте в том же файле еще одну функцию, чтобы тесты прошли

test("Houses should be destroyed", () => {
    // const housesFilter = city.houses.filter(h=>h.address.street.title !== "Happy street")
    deleteHouse(city, "Happy street")//Создали функцию, которая ищет в сити дом "Happy street"
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})
test("Buildings with correct staff count", () => {
    // const housesFilter = city.houses.filter(h=>h.address.street.title !== "Happy street")
   let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)//Создали функцию, которая ищет в сити дом "Happy street"
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE STATION");
})

//01. создайте тип CityType2
//2. заполните обьект city, что бы тесты ниже прошли
test("city should contains 3 house", () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");

})

// 01. дополните тип GovernmentBuildingsType2
//2. заполните обьект city, что бы тесты ниже прошли
test("city should contains hospital and fire station", () => {
//test.skip- пропустить тест
    expect(city.governmentBuildings.length).toBe(2)
    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central str")

    expect(city.governmentBuildings[1].type).toBe("FIRE STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("South str")
})
