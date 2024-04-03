const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        {name: "Hans", lastname: "Müller", age: 22},
        {name: "Georg", lastname: "Huber", age: 37},
        {name: "Fritz", lastname: "Mayr", age: 19}
    ];
    console.table(table);
    const column = await prompt("Enter the name of the column (Name, LastName, or older): ");
    const row = parseInt(await prompt("Enter the row number between (1-3): "));


    if (row >= 1 && row <= table.length) {
        const rowData = table[row - 1];
        const columnValue = rowData[column.toLowerCase()];



        console.log("Value at row", row, "and column", column, "is:", columnValue);
    } else {
        console.log("Invalid column name.");
    }


}

execute().finally(() => rl.close());
