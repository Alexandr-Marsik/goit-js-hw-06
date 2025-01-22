// class User {
//   name;
//   password;
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//   }
// }
// const mango = new User('Mango', 'qwe123');
// console.log('mango:', mango);

// const Poly = new User('Poly', 'asd456');
// console.log('Poly:', Poly);
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Брилиант', price: 2700, quantity: 600 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 150, quantity: 100 },
];
function calcTotalPrice(stones, stonesName) {
  for (const stone of stones) {
    if (stone.name === stonesName) {
      return stone.price * stone.quantity;
    }
  }
  return 'not found';
}
console.log(calcTotalPrice(stones, 'Изумруд'));
// function doStuff() {
//   // Тіло функції
//   console.log('Log inside multiply function');
// }
// doStuff();
// /**Функция add должна уметь складывать три числа
//  * и выводить результат в консоль.
//  * Объяви для функции add три параметра:
//  * a, b и c, которые будут получать значения
//  * из аргументов, во время ее вызова.
//  * Дополни console.log() таким образом,
//  * чтобы он логировал строку
//  * " <result>",
//  * где <result> - это сумма переданных чисел.
//  * Объявлена функция add(a, b, c) -
//  * Вызов add(15, 27, 10) выводит в консоль
//  * "Addition result equals 52" -
//  * Вызов add(10, 20, 30) выводит в консоль
//  * "Addition result equals 60" -
//  * Вызов add(5, 10, 15) выводит в консоль
//  * "Addition result equals 30" */
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// ///////////////////////////////////////
// // function multiply(x, y, z) {
// //   const product = x * y * z;
// //   // Повертаємо результат виразу множення
// //   return product;
// // }

// // // Результат роботи функції можна зберегти у змінну
// // const result = multiply(2, 3, 5);
// // console.log(result); // 30
// ////////////////////////
// function multiply(x, y, z) {
//   return x * y * z;
// }
// const result = multiply(2, 3, 5);

// console.log(result); // 30
// /////////////////////
// function makeMessage(username) {
//   console.log(`Hello ${username}`);
// }

// makeMessage('Jacob');
//////////////////////////////
// function add(a, b, c) {
//   return a + b + c;
// }

// add(a, b, c);
// console.log(add);
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// console.log('Log before multiply execution');
// multiply(2, 3, 5); // "Result: 30"
// console.log('Log after multiply execution');
// Глобальна змінна
///////////////////////////////////
// const value = "I'm a global variable";

// function foo() {
//   // Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"
////////////////////
// function foo() {
//   // Локальна змінна
//   const value = "I'm a local variable";
//   // Можна звернутися до локальної змінної
//   console.log(value); // "I'm a local variable"
// }

// foo();
// console.log(value); // ReferenceError: value is not defined
// Помилка: локальну змінну не видно за межами функції;
//////////////////////////////////////////////////////
function makeMessage(name, price) {
  return `"You picked ${name}, price per item is ${price} credits"`;
}
console.log(makeMessage('Radar', 6150));
//////////////////////////////
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}
console.log(calculateTotalPrice(5, 100));
