const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const nr = parseInt(await prompt("Please enter a number between 1-7: "));
    if (nr === 1) {
        console.log("monday");
    } else if (nr === 2) {
        console.log("Tuesday");
    } else if (nr === 3) {
        console.log("Wednesday");
    } else if (nr === 4) {
        console.log("Thursday");
    } else if (nr === 5) {
        console.log("Friday");
    } else if (nr === 6) {
        console.log("Saturday");
    } else {
        console.log("Sunday");
    }

}

execute().finally(() => rl.close());