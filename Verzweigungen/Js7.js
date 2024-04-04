const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const nr1 = parseFloat(await prompt("Please enter 1. number:"));
    const nr2 = parseFloat(await prompt("Please enter 2. number:"));
    const nr3 = parseFloat(await prompt("Please enter 3.number:"));
    const nr4 = parseFloat(await prompt("Please enter 4. number:"));

    nr1 > nr2 && nr1 > nr3 && nr1 > nr4 ? console.log("Largest number is:", nr1) : "";

    nr2 > nr1 && nr2 > nr3 && nr2 > nr4 ? console.log("Largest number is:", nr2) : "";

    nr3 > nr1 && nr3 > nr2 && nr3 > nr4 ? console.log("Largest number is:", nr3) : "";

    nr4 > nr1 && nr4 > nr2 && nr4 > nr3 ? console.log("Largest number is:", nr4) : "";

}

execute().finally(() => rl.close());