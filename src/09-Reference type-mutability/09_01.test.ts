

export type UserType = {
    name: string,
    age: number,
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age++;
}


//Объект
test('big test', () => {

    const user = {
        name: "Nik",
        age: 30,
        address: {
            title: 'Molodechno'
        }
    }
    increaseAge(user)
    expect(user.age).toBe(31)

    const superMan = user;
    superMan.age = 1000;
    expect(user.age).toBe(1000)
})
test('two test', () => {
    const address = {
        title: 'SSHA'
    }
    const user = {
        name: "Nik",
        age: 30,
        address: address
    }
    // let addr = user.address;

    const user2: UserType = {
        name: 'Vita',
        age: 34,
        address: address,
    }
    address.title = 'Molodechno'

    expect(user.address.title).toBe('Molodechno')
    expect(user2.address.title).toBe('Molodechno')
})

//Массив
test('array test', () => {

    const users = [
        {
            name: "Nik",
            age: 30,
        },
        {
            name: "Vita",
            age: 30,
        },];
    const admins = users;

    admins.push({name: 'Vova', age: 34})

    expect(users[2]).toEqual({name: 'Vova', age: 34})

    const address = {
        title: 'SSHA'
    }

    const user = {
        name: "Nik",
        age: 30,
        address: address
    }
    // let addr = user.address;

    const user2: UserType = {
        name: 'Vita',
        age: 34,
        address: address,
    }

    const usersS = [user, user2, {name: 'Pupsik', age: 1, address: address}]
    const adminS = [user, user2];
    adminS[0].name = 'Nikolaj'

    expect(adminS[0].name).toBe('Nikolaj')
})
//Value
test('Value test', () => {

    const usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

//СОРТИРОВКА=====================================================
test('sort test', () => {
    const letters = ['c', 'a', 'b',];
    const lettersSvae = [...letters].sort();
    expect(letters).toEqual(['c', 'a', 'b',])
    expect(lettersSvae).toEqual(['a', 'b', 'c'])
})
