'use strict';

//object literal
const pinto = {
    make: 'Ford',
    model: 'Pinto',
    year: 1979,
    color: 'puce',
    miles: 25000,
    price: 1000,
    render: function(){
        const li = document.createElement('li');
        li.textContent = this.make + ' ' + this.model;
        return li;    
    },
    applyDiscount: function(discountPercent) {
        this.price = this.price * (1 - discountPercent);
    }

};

//console.log(pinto.make + ' ' + pinto.model);
console.log(pinto.make, pinto.model, pinto.price);

//semantically, above is same as:
const tesla = {
    make: 'Tesla',
    model: 'Model S',
    year: 2017,
    color: 'white',
    miles: 1000,
    price: 20000,
    render: function(){
        const li = document.createElement('li');
        li.textContent = this.make + ' ' + this.model;
        return li;    
    },
    applyDiscount: function(discountPercent){
        this.price = this.price * (1 - discountPercent);
    }
};


//console.log(tesla.make + ' ' +  tesla.model);
console.log(tesla.make, tesla.model, tesla.price);
//tesla.applyDiscount(.1);
//console.log(tesla.price);

const ul = document.getElementById('car-list');
const cars = [tesla, pinto];
for(let i = 0; i < cars.length; i++) {
    const li = cars[i].render();
    ul.appendChild(li);
}

