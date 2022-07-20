import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitleHouses, getStreetsTitlesOfGovernmentsBuildings} from "./05_02";

let city: CityType;


beforeEach(() => {//Говорим что-б перед каждым новым тестом,
// функция перезатиерала(как бы по умолчанию) знаечния переменных
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {street: {title: "Central str",}},
            },
            {
                type: "FIRE STATION",
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: "South str",}},
            },

        ],
        citizensNumber: 1000000,
    }
});

test("list of streets titles of governments buildings", ()=>{//список улиц названия правительственных зданий
    let streetsName = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);
    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe("Central str")
    expect(streetsName[1]).toBe("South str")
})
//houses
test("list of streets titles", ()=>{//список домов названия зданий

    let streets = getStreetsTitleHouses(city.houses);
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})
//===============================
test("create greeting messages for streets",()=>{

    let messages = createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")

})