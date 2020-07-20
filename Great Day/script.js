var input = document.querySelector("input[type = 'text']");
var inputtime = document.querySelector("input[type = 'time']");
var select = document.getElementById("priority");
var ul = document.querySelector("ul");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var button = document.querySelectorAll("button");
var container = document.querySelector("div");
var spans = document.getElementsByTagName("span");
var plus_close = document.querySelector("#plus_close");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")

var date = new Date();

function timeChange(png, firstCl, secondCl){
  body.style.background = `linear-gradient(${firstCl}, ${secondCl})`;
  h1.style.background = secondCl;

  for(var i=0; i < button.length; i++){
  button[i].style.background = `${secondCl}`;
  }
  var cityscape = document.createElement("img");
  cityscape.classList.add("cityscape");
  cityscape.setAttribute('src', png);
  container.prepend(cityscape);
}

switch (date.getHours()){
  case 22:
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    timeChange("night.png", "#a989d4", "#452e72");
    break;

  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    timeChange("morning_or_evening.png", "#ffb981", "#b653d2");
    break;

  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    timeChange("day.png", "#c2f3f7", "#62bcfb");
    break;

  
  case 18:
  case 19:
  case 20:
  case 21:
    timeChange("morning_or_evening.png", "#ffb981", "#b653d2");
        break;
}


function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}


input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    if(ul.offsetHeight <= (body.offsetHeight-320)){
    var li = document.createElement("li");

    var texttag = document.createElement("spantext");
    texttag.setAttribute('id', 'text_container');

    var spanPriority = document.createElement("spanother");
    spanPriority.setAttribute('id', 'indicator_container');
    var iconPriority = document.createElement("img");

    var spanDelete = document.createElement("span");
    spanDelete.setAttribute('id', 'basket');
    var iconDelete = document.createElement("img");

    var Deadline = document.createElement("spantext");
    Deadline.setAttribute('id', 'deadline');
    
        
    var textvalue= input.value;
    var selopt = select.value;
    var deadline = inputtime.value;
    
    input.value = "" ;
    switch(selopt){
      case "red": 
      iconPriority.setAttribute('src', 'red.png');
      iconPriority.setAttribute('id', 'indicator');
      break; 
      case "yellow": 
      iconPriority.setAttribute('src', 'yellow.png');
      iconPriority.setAttribute('id', 'indicator');
      break; 
      case "green": 
      iconPriority.setAttribute('src', 'green.png');
      iconPriority.setAttribute('id', 'indicator');
      break; 
    }
    spanPriority.append(iconPriority);
    texttag.append(textvalue);
    Deadline.append(deadline);

    iconDelete.setAttribute('src', 'trashicon.png');
    spanDelete.append(iconDelete);

    ul.appendChild(li).prepend(spanPriority);
    ul.appendChild(li).append(texttag, Deadline, spanDelete);
    

    deleteTodo();
    }else{
      alert("Слишком много задач. Я это все не запомню!")
    }
  }
    
});


ul.addEventListener('click', function(ev) {
      if(ev.target.tagName === 'SPANTEXT'){
          ev.target.classList.toggle('checked');
      }
    
  },false
);



var i=1;
plus_close.addEventListener('click', function(){
  
  if(i==1){
    plus_close.style.transform ="rotate(0deg)";
    i--;
  }else
  {
    plus_close.style.transform ="rotate(45deg)";
    i++;
  }
  document.getElementById("FullInput").classList.toggle('display');
 
});




saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});


clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});


tipsBtn.addEventListener("click",function(){
  overlay.style.height = "100%";
});


closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";
  
})

deleteTodo();
loadTodo();