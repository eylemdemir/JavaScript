const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const number = await prompt("Please enter your number: ");
    const isEven = number => number % 2 === 0;
    console.log(isEven(number));
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());

