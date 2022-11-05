// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((a, b) => a + b);
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {

    //...здесь пишем код.
    if (a === b && b === c) {
        return '10'
    } else if (a < b && b === c || a === b && b > c) {
        return '01'
    } else if (a !== b && b !== c && c !== a) {
        return '11'
    } else {
        return '00'
    }
}

// В return стоит "заглушка", чтоб typescript не ругался


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // return  String(number).split('').map(num=>Number(num)).reduce((a,b)=>a+b);

    let num = String(number);
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += Number(num[i]);
    }
    return result;
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // let resultChet = 0;
    // let resultNoChet = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) или (!(i % 2)) {
    //         resultChet += arr[i];
    //         console.log(resultChet)
    //     } else if (i % 2 !== 0) {
    //         resultNoChet += arr[i];
    //         console.log(resultNoChet)
    //     }
    // }
    // return resultChet > resultNoChet;

    // [1, 100, 2, 200]
    // let resultChet:Array<number> = [];
    // let resultNoChet:Array<number> = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) {
    //         // result.push(arr[i]);
    //         resultChet = [...resultChet, arr[i]];
    //         // console.log(result)
    //     } else if (i % 2 !== 0) {
    //         resultNoChet = [...resultNoChet, arr[i]];
    //         // resultNoChet.push(arr[i]);
    //         // console.log(resultNoChet);
    //     }
    // }
    //
    // return resultChet.reduce((a,b)=>a+b) > resultNoChet.reduce((a,b)=>a+b);

    let resultChet = arr.filter((num, index) => index % 2 === 0 ? num : '').reduce((a, b) => a + b);
    let resultNoChet = arr.filter((num, index) => index % 2 !== 0 ? num : '').reduce((a, b) => a + b);
    // let resultChet = arr.filter((num,index)=> index % 2 ? num : null).reduce((a,b)=>a+b);
    // let resultNoChet = arr.filter((num,index)=> index % 2 ? null : num).reduce((a,b)=>a+b);
    return resultChet > resultNoChet;
}


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]
    // let result = array.filter(num=>num > 0 && num % 1 === 0).map(num=>num**2);
    // console.log(result)
    // console.log(array)
    //     return result;

    let result: Array<number> = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 1 === 0 && array[i] > 0) {
            result = [...result, array[i] ** 2];
        }
    }
    return result;

}


// 6. Функция принимает параметром целое не отрицательное число N
// и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    // let result = 0;
    // for (let i=0; i <= N; i++){
    //     result += i;
    // }
    // return result;

    if (N > 0) {
        return N * (N + 1) / 2;
    } else {
        return 0;
    }
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let result: Array<number> = [];

    // for (let i = 0; i < banknotes.length; i++) {
    //     if (amountOfMoney > banknotes[i]) {
    //         // result.push(banknotes[i]);
    //         result = [...result, banknotes[i]];
    //     }
    // }
    // return result

    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            while (amountOfMoney - banknotes[i] >= 0) {//пока выражение истинно будет выполняться код и не перейдет на следующую итерацию
                amountOfMoney -= banknotes[i];
                result = [...result, banknotes[i]];
            }
        }
    }
    return result;
}
