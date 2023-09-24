// 1. Написать функцию которая переберёт массив и отфильтрует его, оставив только имена файлов с расширениями.js.jsx.ts
const array = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const arrNew = [];
array.map(text => {
    const task1 = /.*?\.(js|jsx|ts)/g;
    const match1 = text.match(task1);
    if (match1) {
        arrNew.push(text);
    }
});
console.log('с расширениями.js, .jsx или .ts:', arrNew);


// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ может содержать не менее одного символа класса \w.
// После символа @ и до.(точки), где начинается домен, может содержать только буквы и быть не короче трех символов.
// После.(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

const mail = 'java_script@google.io';

const task2 = /(\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5})/g;
const test2 = task2.test(mail);
console.log('Условие для ', mail, test2);

// 3. Напишите регулярное выражение, которое находит текст в скобках. Проверьте на примере:
const str3 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты (например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.'
const task3 = /\((.*?)\)/gm;
const match3 = str3.match(task3);
console.log('Текст в скобках: ', match3);

// 4. Напишите функцию которая принимает строку, в которой находит url адрес и заменяет
// с помощью replace на тег домены вида http://site.ru, https://site.com на:
// <a href="http://site.ru">site.ru</a> и <a href="https://site.com">site.com</a> соответственно.

const str4 = 'На сайте  http://site.com размещена http:информация о сайте http://site.ru. Не обязательно http:site должен быть';
console.log('Исходная строка: ', str4);

const task4 = /(http?:\/\/[A-z0-9]{2,}\.[A-z]{2,})/gm;
const match4 = str4.match(task4, '*');
console.log('match4: ', match4);

const replace1 = str4.replace(task4, '<a href="$&">site.ru</a>');
console.log('Строка с заменой: ', replace1);