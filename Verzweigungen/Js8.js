const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const nr = parseFloat(await prompt("Please enter a number between: "));
    if (((nr - Math.floor(nr)) !== 0)){
        console.log("This is a decimal number")}
        else if (nr%2 === 0) {
            console.log("this is a even number ");
        } else {
            console.log("This is a odd number");
        }
    if (1 > nr > 0){
        console.log("This is a decimal number")}
}

    execute().finally(() => rl.close());