var pet = function(spec){
    var it= {};

    it.get_name = function(){
        return spec.name;
    };

    it.sound = function(){
        return spec.make_sound
    }
    return it;
}

var cat = function(spec){
    spec.sound = spec.make_sound;
    var it = pet(spec);
    return it;
}

var myPet = pet({name: "Henry"});
var myCat = cat({make_sound: "hss"});

console.log(myPet.get_name());
console.log(myPet.sound());
console.log(myCat.sound());