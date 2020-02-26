var money,
    time;



var money = prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD", 0); 


var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: "",
    income : []

};

var first, 
    second;
var aa = prompt("Введите обязательную статью расходов в этом месяце", 0);
var bb = prompt("Во сколько обойдется?", 0);

appData.expenses.first = aa;
appData.expenses.second = bb;


alert(+appData.budget/30);

console.log(appData);