// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}

for (const num of Object.values(numbers)) {
    if (num >= 3) {
        console.log(num);
    }
}