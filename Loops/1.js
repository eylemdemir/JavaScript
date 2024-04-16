const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function execute() {
    const nr = parseInt(await prompt("Please enter a number between 1-7: "));

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let i = 0; i < nr; i++) {
        console.log(days[nr]);
    }
}

function prompt(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

execute().finally(() => rl.close());
