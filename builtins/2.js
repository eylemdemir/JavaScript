function getRandomNumber(min, max,isInteger) {
    const randomNumber = Math.random() * (max - min) + min;
    if (isInteger) {
        return Math.round(randomNumber);
    } else {
        return randomNumber;
    }
}

console.log("Integer number ="  + " "+  getRandomNumber(1,10,true));
console.log("Decimal number =" + " "+ getRandomNumber(0,10, false));

