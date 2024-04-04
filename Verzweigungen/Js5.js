const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const letter = await prompt("Please enter a letter: ");
    switch (letter) {
        case 'A'.toUpperCase():
        case 'E'.toUpperCase():
        case 'I'.toUpperCase():
        case 'O'.toUpperCase():
        case 'U'.toUpperCase():
            console.log("This a vowel letter");
            break;
        default:
            console.log("This is a consonant letter");
            break;

    }

}

execute().finally(() => rl.close());