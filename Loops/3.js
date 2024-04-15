const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    let secretNumber;
    do {
        secretNumber = await prompt("Player 1, enter a number between 1 and 100: ");
        secretNumber = parseInt(secretNumber);
    } while (isNaN(secretNumber) || secretNumber < 1 || secretNumber > 100);

    console.clear();

    let attempts = 0;
    let guess;
    do {
        guess = await prompt("Player 2, guess the secret number: ");
        guess = parseInt(guess);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
        } else if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        }
    } while (guess !== secretNumber);

    // Player 2 guessed the number correctly
    console.log(`Congratulations, Player 2! You guessed the secret number ${secretNumber} in ${attempts} attempts.`);
}
execute().finally(() => rl.close());
