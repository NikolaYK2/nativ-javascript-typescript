import {users} from "./08_01.test";

export const usersObj = {
    "0": "Nik",
    "1": 'Vita',
    "2": 'Dima',
    "3": 'Vova',
}

//Если хотим добавить обьект
const user = {id: 100500, name: 'Igor'}
users[user.id] = user //Добавляем в users новый объект
// users[user.id] - создаем ключ строку [user.id] = '100500' - таким способом не будет дубликатов
    //Удаление
delete users[user.id];
users[1].name = 'Lol'
//======================================================================

export const usersArray = [//Обычный массив, поиск объектов при помощи методов, например find долго, так-как пробегается по каждом элементу, пока не найдет то что нужно
    {id: 1, name: 'Nik',},
    {id: 1212, name: 'Vita'},
    {id: 234, name: 'Dima'},
    {id: 2, name: 'Vova'},
];
//Добавление объекта му табельно
usersArray.push(user) //Могут быть дубликаты
    //Имутабельно
usersArray.find(e=> e.id === 1)
// const usersArrayCopy = [...usersArray.filter(e=>e.id !== user.id), user]//c помощью Filter убираем дубликат
// const usersArrayCopy.filter(e=> e.id !== user.id)//c помощью Filter убираем дубликат
