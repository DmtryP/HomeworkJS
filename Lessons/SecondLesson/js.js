var myCounter = sequence(1,5);

function sequence(start = 0, increment = 1){
    let startNum  = start;
    
    return function() {
        var whatToReturn = startNum;
        startNum += increment;
        return whatToReturn;
    }
}

var mkArr = function(fun, times) {
   var arr = [];
   
   for (var i = 0; i < times; i++){
        arr.push(fun());
   }
   
   return arr;
}

// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

console.log(mkArr(myCounter, 3));

// var livingData = {
//     isGuest: true,
//     hasCorona: false
// }

// // var greetingCase = livingData.isGuest ? 'Guest' : 'Resident';

// if (livingData.isGuest){
//     greetingCase = 'Guest';
// }else
// {
//     greetingCase = 'Resident';
// }

// console.log('Hello! You are '+ greetingCase);