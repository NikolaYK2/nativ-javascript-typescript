export type UserType = {
    name: string,
    age: number,
    address: { city: string, house?: number },
}

export type LaptopType = {
    title: string,
}

export type UserWithLaptopType = UserType & {//= UserType & типо сокращение, что бы не переписывать сюда ключи обьекта UserType
    //Говорим что UserWithLaptopType это UserType & и у которого есть дополнительное св-во laptop
    laptop: LaptopType,
}

//Массив книги===================================================================
export type UserWithBooksType = UserType & {
    books: Array<string>,
}
// =================================================================================

//Массив КОМПАНИЙ===================================================================
type Company = { id: number, title: string, }
export type UserWithCompaniesType = UserType & {
    companies: Company[],
}
// =================================================================================

export const increaseAge = (u: UserType) => {
    // const newU = {...u, age: u.age + 1};
    // newU.age += 1
    // return newU;

    //сокращение поверхностной копии
    return {...u, age: u.age + 1};

}


export const moveUser = (u: UserWithLaptopType, city: string) => {
    // const copy = {...u};
    // copy.address = {...copy.address, city:city}
    // return copy;
    return {...u, address: {...u.address, city: city}};
//Примитивные згначения скопировались name and heir, а addres and leptop добавились ссылки
//Но дальше, изменяем city, значит addresu создаем новый обьект и забираем все что было у старого обьекта {...u.adress, Но city поменяй city:city}
}

//lapTop upgraded============================================
export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
    return {...u, laptop: {...u.laptop, title}};
}

//Массив книги===================================================================
export const addBooks = (u: UserWithBooksType & UserWithLaptopType, books: Array<string>) => {
    // const copy ={...u, books:[...u.books]};
    // copy.books.concat(books);
    return {...u, books: {...u.books, ...u.books.concat(books)}}
}
//UPDATE BOOK=================
export const updateBook = (u: UserWithBooksType & UserWithLaptopType,
                           oldBooks: string,
                           newBooks: string) => {

    // const copy ={...u, books:[...u.books]};
    // copy.books.splice(2,1,books);
    // return copy;
    return {
        ...u, books: u.books.map(b => {
            if (b === oldBooks) {
                return newBooks;
            } else {
                return b;
            }
        })
    };
}
// =================================================================================

//DELETE BOOK=================
export const deleteBook = (u: UserWithBooksType & UserWithLaptopType, book: string) => {

    // const copy ={...u, books:[...u.books]};
    // copy.books.splice(2,1,books);
    // return copy;
    return {...u, books: u.books.filter(b => b !== book)};
}
// =================================================================================

//add COMPANIES=================
export const addCompanies = (u: UserWithCompaniesType & UserWithLaptopType & UserWithBooksType, title: string) => {

    return {...u, companies: [...u.companies, {id: 3, title: title}]};
}
// =================================================================================

//UPDATE COMPANIES=================
export const updateCompanies = (u: UserWithCompaniesType,
                                id: number,
                                title: string) => {

    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)};

}
// =================================================================================

//UPDATE COMPANIES STATE=================
export const updateCompaniesTitle = (companies: { [key: string]: Company[] },
                                     id: number,
                                     userName: string,
                                     title: string) => {

    let copyCompanies = {...companies}
    copyCompanies[userName] = copyCompanies[userName].map(c => c.id === id ? {...c, title} : c)
    return copyCompanies;
}
// =================================================================================
