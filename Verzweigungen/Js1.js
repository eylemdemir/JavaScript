const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const password = 2004;
    const myPassword = parseInt(await prompt("Please enter your password: "));
    if (password === myPassword) {
        console.log("Password its true:", password);
    } else {
        console.log("Password not true:", myPassword);
    }

}

execute().finally(() => rl.close());
