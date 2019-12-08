let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;


    startBtn.addEventListener('click',function() {
        time = prompt('Введите дату в формате YYYY-MM-DD','');
        money = +prompt('Ваш бюджет на месяц?','');

        while(isNaN(money) || money == '' || money == null) {
            money = +prompt('Ваш бюджет?','');
        }  

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed(2);
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value  = new Date(Date.parse(time)).getDate();
    });

    expensesBtn.addEventListener('click', function() {
        let sum = 0;

        for(let i = 0; i < expensesItem.length; i++){
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if((typeof (a)) != null &&  (typeof (b)) != null && a !='' && b !=''){
                appData.expenses[a] = b;   
                sum += +b; 
            } else {
                i = i -1;
            }
        }
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click',function() {
        
        optionalExpensesValue.textContent = '';
       
        for(let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalexpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalexpenses[i] + ' '; 
        }
    });

    countBtn.addEventListener('click', function() {
        if (appData.budget == 'undefined') {
            dayBudgetValue.textContent = "Произошла обшибка";
        } else {

            appData.moneyPerDay = (appData.budget / 30).toFixed(2);
            dayBudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 500) {
                levelValue.textContent = "Мало";
            } else if(appData.moneyPerDay < 700) {
                levelValue.textContent = "Средне";
            } else if(appData.moneyPerDay >= 700){
                levelValue.textContent = "Много";
            } else {
                levelValue.textContent = "Произошла обшибка";
            }
        }
    });

    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        appData.savings = !appData.savings;
    });

    sumValue.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum / 100 / 12 * percent;  
            appData.yearIncome = sum / 100 * percent;  

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
       
    });

    percentValue.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum / 100 / 12 * percent;  
            appData.yearIncome = sum / 100 * percent;  

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
       
    });

    let appData = {
        budget: money,
        expenses: {},
        optionalexpenses: {},
        income: [],
        timeData: time,
        savings: false
    };






/* let btnStart = document.getElementById('start'),
    btnAll = document.getElementsByTagName('button'),
    //btnApprove = btnAll.getElementsByClassName('expenses-item-btn'),
    //btnCalculate = btnAll.getElementsByClassName('count-budget-btn'),
    //btnApprove = btnAll.querySelector('.expenses-item-btn'),
    //btnCalculate = btnAll.querySelector('.count-budget-btn'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    
    let expensesItems = document.querySelectorAll('expenses-item'),
    optionalExpensesItems = document.querySelectorAll('optionalexpenses-item')
    checkbox = document.querySelector('#savings'); */

    