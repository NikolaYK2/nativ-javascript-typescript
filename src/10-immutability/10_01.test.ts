import {
    addBooks, addCompanies, deleteBook,
    increaseAge,
    moveUser, updateBook, updateCompanies, updateCompaniesTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";

//КОпия возраста
test('reference type test', () => {
    let user: UserType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo'
        }
    }
    const newUser = increaseAge(user);

    expect(user.age).toBe(30);
    expect(newUser.age).toBe(31);
    expect(newUser.address).toBe(user.address);
})

//КОпия адресса
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const newUser = moveUser(user, "California");

    expect(user).not.toBe(newUser);
    expect(user.address).not.toBe(newUser.address);
    expect(user.laptop).toBe(newUser.laptop);
    expect(newUser.address.city).toBe('California');
})

//Апгрейд laptop=====================================================
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const newLaptop = upgradeUserLaptop(user, "Macbook");

    expect(user).not.toBe(newLaptop);
    expect(user.address).toBe(newLaptop.address);
    expect(user.laptop).not.toBe(newLaptop.laptop);
    expect(newLaptop.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('ZenBook');
})

//booKS ARRAY==============================================================
test('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],
    }
    const newBooks = addBooks(user, ['ts', 'rest api']);

    expect(user).not.toBe(newBooks);
    expect(user.laptop).toBe(newBooks.laptop);
    expect(user.books).not.toBe(newBooks.books);
    expect(newBooks.books[4]).toBe('ts');
    expect(newBooks.books[5]).toBe('rest api');
})
//BOOKS UPDATE==============
test('update books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],
    }
    const updateBooks = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(updateBooks);
    expect(user.laptop).toBe(updateBooks.laptop);
    expect(user.books).not.toBe(updateBooks.books);
    expect(updateBooks.books[2]).toBe('ts');
})

//delete UPDATE==============
test('delete book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],
    }
    const delBooks = deleteBook(user, 'js');

    expect(user).not.toBe(delBooks);
    expect(user.laptop).toBe(delBooks.laptop);
    expect(user.books).not.toBe(delBooks.books);
    expect(delBooks.books[2]).toBe('React');
    expect(delBooks.books).toEqual(['css', 'html', 'React']);
})

//COMPANIES ==============================================================
test('companies', () => {
    let user: UserWithCompaniesType & UserWithLaptopType & UserWithBooksType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],
        companies: [{id: 1, title: 'Amkodor'}, {id: 2, title: 'ENEF'}],
    }

    const company = addCompanies(user, 'IT');

    expect(user).not.toBe(company);
    expect(user.laptop).toBe(company.laptop);
    expect(company.companies[2].title).toBe('IT');
    expect(user.companies).not.toBe(company.companies);
})
//update company======
test('update company', () => {
    let user: UserWithCompaniesType & UserWithLaptopType & UserWithBooksType = {
        name: 'Nik',
        age: 30,
        address: {
            city: 'Molo',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],
        companies: [{id: 1, title: 'Amkodor'}, {id: 2, title: 'ENEF'}],
    }

    const updateCompany = updateCompanies(user, 1, 'Amkodor gavno');

    expect(user).not.toBe(updateCompany);
    expect(updateCompany.companies[0].title).toBe('Amkodor gavno');
    expect(user.companies).not.toBe(updateCompany.companies);
})

//update company в отдельном state======
test('update company state', () => {

    let companies = {
        'Nik': [{id: 1, title: 'Amkodor'}, {id: 2, title: 'ENEF'}],
        'Vita': [{id: 1, title: 'Apteka'}]
    }

    const copy = updateCompaniesTitle(companies, 1, 'Vita', 'IT');
    expect(copy['Nik']).toBe(companies['Nik']);
    expect(copy['Vita']).not.toBe(companies['Vita']);
    expect(copy['Vita'][0].title).toBe('IT');
})