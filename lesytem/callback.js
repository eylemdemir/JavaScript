const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to read data from file
function readData(callback) {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File does not exist, start with an empty array
                return callback([]);
            } else {
                throw err;
            }
        }
        callback(JSON.parse(data));
    });
}

// Function to save data to file
function saveData(data, callback) {
    fs.writeFile('data.json', JSON.stringify(data), callback);
}

// Function to add a new product
function addProduct(data) {
    rl.question('Enter product number: ', (productNumber) => {
        rl.question('Enter description: ', (description) => {
            rl.question('Enter price: ', (price) => {
                const product = { productNumber, description, price: parseFloat(price) };
                data.push(product);
                console.log('Product added.');
                askUser(data);
            });
        });
    });
}

// Function to find a product
function findProduct(data) {
    rl.question('Enter product number to find: ', (productNumber) => {
        const product = data.find(p => p.productNumber === productNumber);
        if (product) {
            console.log('Product found:', product);
        } else {
            console.log('Product not found.');
        }
        askUser(data);
    });
}

// Function to ask user what to do next
function askUser(data) {
    rl.question('Enter a (add), f (find), x (save & exit): ', (answer) => {
        if (answer === 'a') {
            addProduct(data);
        } else if (answer === 'f') {
            findProduct(data);
        } else if (answer === 'x') {
            saveData(data, () => {
                console.log('Data saved.');
                rl.close();
            });
        } else {
            console.log('Invalid option.');
            askUser(data);
        }
    });
}

// Read data and start the program
readData((data) => {
    askUser(data);
});