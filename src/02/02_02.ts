// ======================Houses=================
export type streetType = {
    title: string,

}
export type addressType = {
    number?: number,
    street:streetType,
}
export type housesType = {
    id?: number;
    buildedAt: number,
    repaired: boolean,
    address:addressType,
}
// =======================governmentBuildings================================

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE STATION",
    budget: number,
    staffCount: number,
    address: addressType,
}
// ============================Общий тип========================================
export type CityType = {
    title: string,
    houses: housesType[],
    governmentBuildings: governmentBuildingsType[],
    citizensNumber: number,
}

