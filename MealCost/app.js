var ChinaBox = {
    price: 0,
    calories: 0,
    basket: 0,

    small: {
        price: 300,
        calories: 250,
    },

    large: {
        price: 380,
        calories: 400,
    },

    people_number: {

    }, 

    pig: {
        price: 60,
        calories: 100,
    },

    meet: {
        price: 80,
        calories: 150,
    },

    chicken: {
        price: 40,
        calories: 80,
    },

    bread_crumbs: {
        price: 15,
        calories: 10,
    },

    extra_souse:{
        price: 20,
        calories: 5,
    },

    calculate: function(size){
    ChinaBox.reset();
        this.price += ChinaBox[size].price;
        this.calories += ChinaBox[size].calories;
        
        var checkboxArray = document.querySelectorAll('input[name="add"]:checked');

        for(var i = 0; i < checkboxArray.length; i++){
            var type = checkboxArray[i].id;

            this.price += ChinaBox[type].price;
            this.calories += ChinaBox[type].calories;
        }

        this.price *= (document.getElementById("people_number").value);

        this.basket += this.price;

        ChinaBox.result(this.price, this.calories, this.basket);
    },

    result: function(price, calories, basket){
        
        document.getElementById('price').innerHTML = price;
        document.getElementById('calories').innerHTML = calories;
        document.getElementById('basket').innerHTML = basket;
    },

    reset: function(){
        this.price = 0;
        this.calories = 0;
        ChinaBox.result(this.price, this.calories);
    },

    
}

document.getElementById("form_container").addEventListener("submit",(e)=>{
    e.preventDefault();
    ChinaBox.calculate(document.querySelector('input[name="size"]:checked').value);

 })