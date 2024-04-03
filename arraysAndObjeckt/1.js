const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
    let index = await prompt("please enter between 1-7 number: " );
    if (index >= 1 && index <= 7){
        let dayIndex = index -1;
        console.log("The days is:" + days[dayIndex]);
    }
    else
    {
        console.log("Please enter number between 1-7!!:" );
    }
}

execute().finally(() => rl.close());
