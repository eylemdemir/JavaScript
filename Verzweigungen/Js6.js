const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const nr1 = parseFloat(await prompt("Please enter first number: "));
    const operator = await prompt("please enter one operator (+, -, *, /, %):");
    const nr2 = parseFloat(await prompt("Please enter second number:"));

    switch (operator) {
        case '-':
            console.log(nr1 - nr2);
            break;
        case '*':
            console.log(nr1 * nr2);
            break;
        case '+':
            console.log(nr1 + nr2);
            break;
        case '%':
            console.log(nr1 % nr2);
            break;
        case '/':
            console.log(nr1 / nr2);
            break;

    }

}

execute().finally(() => rl.close());