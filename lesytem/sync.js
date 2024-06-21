const fs = requiere('fs');
const readline = requiere('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

function readData(){
    try{
        const data = fs.readFilesync('data.json', 'utf8')
        return JSON.parse(data);
    }catch (err){
        if(err.code ==='ENOENT'){
            return [];
        }else {
            throw err;
        }
    }

}

function saveData(data){
    fs.writeFileSync('data.json', JSON.stringify(data));
}

function addProduct(data){
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

readData((data) => {
    askUser(data);
});
