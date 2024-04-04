const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const password = 2004;
    const myPassword = await prompt("Please enter your password: ");
    if (password === myPassword) {
        console.log("Password its true:", password);
    } else {
        console.log("Password is not true!");
    }

}

execute().finally(() => rl.close());
