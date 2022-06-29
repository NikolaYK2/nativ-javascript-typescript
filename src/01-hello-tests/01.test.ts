import {multi, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => { //говорим что б перед каждый новым тестом, выполни эту функцию
                        //перезатерает перед каждым новым тестом переменные
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {
    //sum should be correct-пишем что сума должна быть коректной

    //подготовительные данные можно вынести за тест, то есть глобально?
    // const a = 1;
    // const b = 2;
    // const c = 3;// лучше использовать const что б не перезатереть потом для следующих тестов данные
                // если использовать let то для глобальной делаем следующее...
    // a = 100

    //действия - если не найдет const или let у себя в test выпрыгнет из теста и будет искать за
    const result1 = sum(a, b); //-вызываем функцию и передаем ей параметры
    const result2 = sum(c, b); //-вызываем функцию и передаем ей параметры

    //expect ожидаем(результат) - а ожидаем что он(toBe) будет каким - равен(3)
    expect(result1).toBe(3);
    expect(result2).toBe(5);

});
test("multi should be correct", () => {
    //sum should be correct-пишем что сума должна быть коректной

    //подготовительные данные
    const a = 1;
    const b = 2;
    const c = 3;

    //действия
    const result1 = multi(a,b); //-вызываем функцию и передаем ей параметры
    const result2 = multi(c,b); //-вызываем функцию и передаем ей параметры

    //expect ожидаем(результат) - а ожидаем что он(toBe) будет каким - равен(3)
    expect(result1).toBe(2);
    expect(result2).toBe(6);

});
test("split Into Words should be correct", () => {
    //sum should be correct-пишем что сума должна быть коректной

    //подготовительные данные
    const sent1 = 'hello my friend'; //sent1 - предложение
    const sent2 = 'JS - the best  programing language.';

    //действия
    const result1 = splitIntoWords(sent1); //-вызываем функцию и передаем ей параметры
    const result2 = splitIntoWords(sent2); //-вызываем функцию и передаем ей параметры

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programing');
    expect(result2[4]).toBe('language');

});