
class Hamburger {
            constructor (size) {
                this.size = size;
                this.stuffing = [];
            }
            addToppings(topping) { // Добавить добавку
                this.stuffing = topping;
            }

            getToppings() { // Получить список добавок
                let block = document.querySelector('.toppings');
                let adds = this.stuffing.map(function(item) {
                    return item.name;
                });
                block.insertAdjacentHTML('beforeend', `<p>You chose ${adds} toppings`);
            }
            getSize() { // Узнать размер гамбургера
                let block = document.querySelector('.size');
                block.insertAdjacentHTML('beforeend', `<p>You chose ${this.size} size`);
            }

            calculatePrice() { // Узнать цену
                let sum = 0;
                if (this.size == 'big') {
                    sum = sum + 100;
                } else {
                    sum = sum + 50;
                }
                let a = this.stuffing.forEach(function(item) {
                    sum = sum + item.price;
                });
                console.log(sum);
                let block = document.querySelector('.price');
                block.insertAdjacentHTML('beforeend', `<p>Your burger price is ${sum} $`);
            }
            calculateCalories() { // Узнать калорийность
                let sum = 0;
                
                if (this.size == 'big') {
                    sum = sum + 40;
                } else {
                    sum = sum + 20;
                }
                
                
                let a = this.stuffing.forEach(function(item) {
                    sum = sum + item.calories;
                });
                let block = document.querySelector('.calories');
                block.insertAdjacentHTML('beforeend', `<p>Your burger calories is ${sum} ccal`);
            }
};

class Stuffing {
    constructor (name, price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
};

const stuff = [
    new Stuffing('cheese', 10, 20),
    new Stuffing('salad', 20, 5),
    new Stuffing('beef', 50, 80),
    new Stuffing('ketchup', 15, 20),
    new Stuffing('mayonese', 20, 10),
];

function getOrder () {
    let yourBurger = new Hamburger(document.querySelector('input[name="size"]:checked').value);
    let checked = document.querySelectorAll('.check:checked');
    console.log(checked);
    let all = [];
    for (let i=0; i<checked.length; i++) {
        for (let j=0;j<stuff.length; j++) {
            if (checked[i].value == stuff[j].name){
                all.push(stuff[j]);
            }
        }
    }
    console.log(all);
    yourBurger.addToppings(all);
    yourBurger.calculatePrice();
    console.log(yourBurger);
    yourBurger.calculateCalories();
    yourBurger.getToppings();
    yourBurger.getSize();
}