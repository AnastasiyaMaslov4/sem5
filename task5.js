// **Задание 5**
// Дано 2 массива 

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

let mergeArrays = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        console.log("Длины массивов не равны");
    } else {
        const res = {};
        for (let i = 0; i < arr1.length; i++) {
            res[arr1[i]] = arr2[i];
        }
        return res;
    }
}

console.log(mergeArrays(en, ru));