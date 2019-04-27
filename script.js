
class Hamburger {
            constructor (size) {
                this.size = size;
                this.stuffing = [];
            }
            addToppings(topping) { // Добавить добавку
                this.stuffing = topping;
            }

            getToppings(topping) { // Получить список добавок
                
            }
            getSize() { // Узнать размер гамбургера
                
            }
            getStuffing() { // Узнать начинку гамбургера
                
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

            }
            calculateCalories() { // Узнать калорийность
                if (this.size == 'big') {
                    sum = sum + 40;
                } else {
                    sum = sum + 20;
                }
                
                let sum = 0;
                let a = this.stuffing.forEach(function(item) {
                    sum = sum + item.calories;
                });
                console.log(sum);
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
    yourBurger.calculateCalories()
    
}