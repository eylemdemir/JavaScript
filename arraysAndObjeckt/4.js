const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    const data = [["Hans", "Georg", "Fritz"],
        ["Müller", "Huber", "Mayr"],
        [22, 37, 19]];

    const column = {
        "name": 0,
        "lastname": 1,
        "age": 2
    };
    console.table(data);

    const columnName = await prompt("Enter the name of the column (Name, LastName, or older): ");
    const row = await prompt("Enter the row number: ");
    if (row >= 1 && row <= 3 && column.lastname || column.age || column.name) {

        const col = column[columnName.toLowerCase()];
        const value = data[col][row - 1];

        console.log("Value at row", row, "and column", columnName, "is:", value);
    } else {
        console.log("Invalid row number or column name.");
    }
}

execute().finally(() => rl.close());
