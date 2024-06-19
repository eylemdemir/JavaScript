const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
const binary = parseInt(prompt( "Enter a binary number "))
    const decimalNumber = parseInt(binary, 2)
    console.log("the decimal number is:", decimalNumber);
}

execute().finally(() => rl.close());