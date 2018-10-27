function Store() {
    this.pizzaSlicePrice;
    this.weekendDiscount;
    this.nightDiscount;
    this.bonus;

    this.buyPizzaSlice = function () {

        return `Price after discount is ${this.pizzaSlicePrice}
        and you have ${this.bonus} bonuses`;
    };
}

function getDiscount(pizza) {
    let date = new Date();
    let discount = null;

    if (date.getHours() >= 23 && date.getHours() <= 6 && date.getDay() > 5) {
        discount += pizza.nightDiscount + pizza.weekendDiscount;
    } else if (date.getHours() >= 23 && date.getHours() <= 6) {
        discount += pizza.nightDiscount;
    } else if (date.getDay() > 5) {
        discount += pizza.weekendDiscount;
    }

    pizza.pizzaSlicePrice -= pizza.pizzaSlicePrice * discount / 100;

    return pizza.pizzaSlicePrice;
}


function setBonus(pizza) {
    let bonus = pizza.bonus;
    pizza.bonus = bonus + Math.floor(pizza.pizzaSlicePrice / 10);
}

let pz = new Store();
pz.pizzaSlicePrice = 100;
pz.weekendDiscount = 10;
pz.nightDiscount = 5;
pz.bonus = 0;
getDiscount(pz);
setBonus(pz);
console.log(pz.buyPizzaSlice());




