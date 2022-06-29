
export function sum(a: number, b: number) {
    return a + b;
}
export function multi(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(" ") //words- слова
    //sentence - предложение
    //toLowerCase -слова к мелкому регистру
    //split(" ") - говорим что по пробелу разбей на массив слов

        return words.filter(w => w !== "" && w !== '-')//отфильтруй слова w-которые не= "" и(&&) -
        .map(w => w
            .replace("!", "")
            .replace(" ", "")
            .replace(".", ""));
};