console.clear();

// Step 1: Define Animals
const lion = {
    name: "Lion",
    foodType: "Meat",
    dailyRequirement: 5,
    foodStock: 20
};

const elephant = {
    name: "Elephant",
    foodType: "Vegetables",
    dailyRequirement: 10,
    foodStock: 50
};

const monkey = {
    name: "Monkey",
    foodType: "Fruits",
    dailyRequirement: 3,
    foodStock: 15
};

// Step 2: Create Zoo Array
const zoo = [lion, elephant, monkey];
let index=0;

// Step 3: Check initial food stock for all animals
console.log(`${zoo[index].name} has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
index ++;
console.log(`${zoo[index].name} has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
index ++;
console.log(`${zoo[index].name} has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
console.log();

// Step 4: Feed the animals and update stock
index=0;
zoo[index].foodStock -= zoo[index].dailyRequirement;
console.log(`After the ${zoo[index].name} has been fed with ${zoo[index].dailyRequirement} units, the remaining ${zoo[index].foodType} stock is ${zoo[index].foodStock}`);
index ++;

zoo[index].foodStock -= zoo[index].dailyRequirement;
console.log(`After the ${zoo[index].name} has been fed with ${zoo[index].dailyRequirement} units, the remaining ${zoo[index].foodType} stock is ${zoo[index].foodStock}`);
index ++;

zoo[index].foodStock -= zoo[index].dailyRequirement;
console.log(`After the ${zoo[index].name} has been fed with ${zoo[index].dailyRequirement} units, the remaining ${zoo[index].foodType} stock is ${zoo[index].foodStock}`);
console.log();

// Step 5: Check food stock after feeding
index = index - index;
console.log(`${zoo[index].name} now has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
index ++;
console.log(`${zoo[index].name} now has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
index ++;
console.log(`${zoo[index].name} now has ${zoo[index].foodStock} units of ${zoo[index].foodType}.`);
