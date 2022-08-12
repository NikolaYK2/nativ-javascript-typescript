//берем в качестве ключей их же id
type usersType ={
    [key: string]: {id:number, name: string,}
}
export let users:usersType = {//Ассоциативный массив, поиск объектов происходит мгновенно, идет адресация
    "1": {id: 1, name: 'Nik',},
    "1212": {id: 1212, name: 'Vita'},
    "234": {id: 234, name: 'Dima'},
    "2": {id: 2, name: 'Vova'},
}

beforeEach(()=>{
    users = {//Ассоциативный массив, поиск объектов происходит мгновенно, идет адресация
        "1": {id: 1, name: 'Nik',},
        "1212": {id: 1212, name: 'Vita'},
        "234": {id: 234, name: 'Dima'},
        "2": {id: 2, name: 'Vova'},
    }

})
test('should select corresponding user from obj', ()=>{
    delete users[1];
    expect(users[1]).toBeUndefined()
})