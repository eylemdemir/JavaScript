const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const n1 = await prompt("Please enter your First number: ");
    const n2 = await prompt("Please enter your Second number: ");
    const n3 = await prompt("Please enter your Third number: ");
    const n4 = await prompt("Please enter your Fourth number: ");


    function findLargestNumber(nr1, nr2, nr3, nr4) {
        return Math.max(n1, n2, n3, n4);
    }

    console.log("Largest number is:" + findLargestNumber());
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());