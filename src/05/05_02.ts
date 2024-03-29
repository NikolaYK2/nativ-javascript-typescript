import {governmentBuildingsType, housesType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings=(buildings: governmentBuildingsType[])=>{
    return buildings.map(b=>b.address.street.title)
}

//hous
export const getStreetsTitleHouses= (houses: housesType[])=>{
    return houses.map(h=>h.address.street.title)
}

//Hay street
export const createMessages= (houses: housesType[])=>{
    let callback = (hay: housesType)=>{
        return `Hello guys from ${hay.address.street.title}`
    }
    let newArray = houses.map(callback)
    return newArray;
}