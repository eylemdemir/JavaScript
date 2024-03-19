const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const tempature = parseInt(await prompt("Please enter tempature: "));
    if (tempature <= 6) {
        console.log("weather is cold, wear a jacket");
    } else if (tempature >= 6 && tempature <= 15) {
        console.log("weather is pleasant, enjoy with good weather.");
    } else {
        console.log("weather is hot, enjoy with sun :)")
    }

}

execute().finally(() => rl.close());