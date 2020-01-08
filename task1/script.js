'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    cash: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};

let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let sum = prompt("Во сколько обойдется?");
let itemExpenses2 = prompt("Введите обязательную статью расходов в этом месяце");
let sum2 = prompt("Во сколько обойдется?");
appData.expenses.itemExpenses = sum;
appData.expenses.itemExpenses2 = sum2;
alert(appData.cash/30);