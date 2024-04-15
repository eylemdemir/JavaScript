const people = [
    {name: "Hans", lastname: "Müller", age: 22},
    {name: "Georg", lastname: "Huber", age: 37},
    {name: "Fritz", lastname: "Mayr", age: 19}
];

for (const person of people) {
    console.log(`Name: ${person.name}`, `Last Name: ${person.lastname}`, `Age: ${person.age}`);
}

