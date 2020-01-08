//'use strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();


let appData = {
    cash: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && a != "" && a.length < 50) {
            console.log("всё круто!!!");
            appData.expenses[a] = b;
        }
        else {                            
            console.log ("bad result");
            i--;
        }      
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.manePerDay = (appData.cash/30).toFixed();
    alert("Ежедневный бюджет: " + appData.manePerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.manePerDay < 100) {
        console.log("Минимальный уровень достатка");
    }
    else if (appData.manePerDay > 100 &&  appData.manePerDay < 2000) {
        console.log("Средний уровень достатка");
    }
    else if (appData.manePerDay > 2000) {
        console.log("Высокий уровень достатка");
    }
    else {
        console.log("Ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt ("Под какой процент");
        appData.manthIncome = save/100/12+percent;
        alert("Доход в месяц с вашего депозита: " + appData.manthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i<4; i++) {
        let x = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = x;
    }
}
chooseOptExpenses();