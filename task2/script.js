//'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    cash: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
    
//     if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && a != "" && a.length < 50) {
//         console.log("всё круто!!!");
//         appData.expenses[a] = b;
//     }
//     else {                            
//         console.log ("bad result");
//         i--;
//     }
        
// };

let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
    ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && a != "" && a.length < 50)
        console.log("всё круто!!!");
        appData.expenses[a] = b;
        i++;
}

appData.manePerDay = appData.cash/30;

alert("Ежедневный бюджет: " + appData.manePerDay);

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