const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ["Hans", "Georg", "Fritz"],
        ["Müller", "Huber", "Mayr"],
        [22, 37, 19]
    ];
    console.table(table);

    const column = parseInt(await prompt("Enter the column number: "));

    const row = parseInt(await prompt("Enter the row number : "));
    if (row >= 1 && row <= 3 && column >= 1 && column <= 3) {

        const value = table[column - 1][row - 1];
        console.log("Value at row", row, "and column", column, "is:", value);
    } else {
        console.log("Invalid row or column number.");
    }


}

execute().finally(() => rl.close());
