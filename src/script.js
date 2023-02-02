"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10) + 1;
const chooseOption = (opt1, opt2) => {
    const randNum = (Math.round(Math.random()) === 0) ? opt1 : opt2;
    return randNum;
}
    
const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player, health) => console.log(`${player} health: ${health}`);
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1 , player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health)
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) === true) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Goober", "Ant", 100, 100);


//extended challenge

console.log("* * * * * * * * * * * * * * * * * * * * *");

function getGrade(num) {
    if (num >= 90) {
        return (`Score: ${num} Grade: A`)
    } else if (num < 90 && num >= 80) {
        return (`Score: ${num} Grade: B`)
    } else if (num < 80 && num >= 70) {
        return (`Score: ${num} Grade: C`)
    } else if (num < 70 && num >= 60) {
        return (`Score: ${num} Grade: D`)
    } else {
        return (`Score: ${num} Grade: F`)
    } 
}

console.log(getGrade(89));


function prioritize(urgent, important) {
    if (urgent === true && important === true) {
        return (`urgent & important → 1`);
    } else if (urgent !== true && important === true) {
        return (`important not urgent → 2`);
    } else if (urgent === true && important !== true) {
        return (`urgent not important → 3`);
    } else {
        return (`neither urgent nor important → 4`);
    }
}

console.log(prioritize(true, false));

function calculatePay(wage, hours) {
    const overTime = (wage * hours) + (hours - 40) * (wage * 0.50);
    const weeklyWage = wage * hours;
    if (hours <= 40) {
       return (`Your weekly pay is $${weeklyWage}`); 
    } else {
        return (`Your weekly pay is $${overTime}`);
    }
    
}

console.log(calculatePay(12, 50));