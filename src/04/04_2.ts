import {CityType, governmentBuildingsType} from "../02/02_02";

export function deleteHouse(city: CityType, street: string){
    city.houses = city.houses.filter(h=>h.address.street.title !== street)
    //сити в котором хаусес, хотим перезатереть = сити.хаусес.филтер => и не должен быть равен стрит = "Happy street"
}

export const getBuildingsWithStaffCountGreaterThen=(buildings: governmentBuildingsType[], staffCount: number)=>{
return buildings.filter(b=>b.staffCount > staffCount)
    //считается чистой функции, так как она ничего не модифицирует и просто возвращает массив
}
