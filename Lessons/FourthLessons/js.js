var arr2 =[-1, 0, -6, 23, 6];

function check(num) {
    return num > 0;
  }
console.log(arr2.every(check));

function check(value) {
    return value < 0;
  }
  
console.log(arr2.filter(check));

function check(value) {
    return value < 0;
  }