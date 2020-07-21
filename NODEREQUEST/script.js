const request = require('request');
request.get('https://dog.ceo/api/breeds/image/random', 
(data, err, message) => {
  
  console.log(JSON.parse(message));
  
  let parsed = [];
  parsed[0] = JSON.parse(message);

  let arr = [];

  parsed.forEach((elem) => { 
    arr.push(elem.message);
    
  });
  console.log(arr[0]);    
  // var body = document.querySelector("body");
  // var img = body.createElement("img");
  // img.setAttribute('src', `${arr[0]}`);



  }
);