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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
            
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && a.length < 50) {
                console.log("всё круто!!!");
                appData.expenses[a] = b;
            }
            else {                            
                console.log ("bad result");
                i--;
            }      
        }
    },
    detectDayBudget: function() {
        appData.manePerDay = (appData.cash/30).toFixed();
    alert("Ежедневный бюджет: " + appData.manePerDay);
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt ("Под какой процент");
            appData.manthIncome = save/100/12+percent;
            alert("Доход в месяц с вашего депозита: " + appData.manthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i<4; i++) {
            let x = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = x;
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принисёт дополнительный доход? (Перечислите через запятую)", "");
        if ((typeof(items)) === "string" && (typeof(items)) != null && items != "") {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        }
        else {
            console.log("Введены неверные данные");
            i--;
        }   
        }
        // appData.income.forEach(function(i, income) {
        //     alert("Способы доп. заработка:" + (i+1) + income);
        // });
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i) + " - " + itemmassive);
        });
    }
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}