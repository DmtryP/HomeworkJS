import * as event from './event.js';

var ul = document.querySelector("ul");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var button = document.querySelectorAll("button");
var container = document.querySelector("div");
var weather = document.getElementById("weather_container");


var date = new Date();

// Изменение стиля и изображения проекта
function timeChange(png, firstCl, secondCl, weaterCl){
  body.style.background = `linear-gradient(${firstCl}, ${secondCl})`;
  h1.style.background = secondCl;
  weather.style.background = weaterCl;

  for(var i=0; i < button.length; i++){
  button[i].style.background = `${secondCl}`;
  }
  var cityscape = document.createElement("img");
  cityscape.classList.add("cityscape");
  cityscape.setAttribute('src', png);
  container.prepend(cityscape);
}

// Конструкция проверки времени и вызова timeChange(...)
switch (date.getHours()){
  case 22:
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    timeChange("night.png", "#a989d4", "#452e72", "#352357");
    break;

  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    timeChange("morning_or_evening.png", "#ffb981", "#b653d2", "#883e9d");
    break;

  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    timeChange("day.png", "#c2f3f7", "#62bcfb", "#4a8ebe" );
    break;

  
  case 18:
  case 19:
  case 20:
  case 21:
    timeChange("morning_or_evening.png", "#ffb981", "#b653d2", "#883e9d");
        break;
}

event.deleteTodo();

// Загрузка сохраненных задач из LocalStorage
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    event.deleteTodo();
  }
}

event.inputListener();

event.EndTodo();

event.CloseShow();

event.setToLocalS();

event.removefromLocalS();

event.overlayshow();

event.overlayhide();

loadTodo();
