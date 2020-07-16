// 21
function p() {
    var elements = document.getElementsByClassName('zzz');
    for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i+1;
    }
}

// 22
var date = new Date();
console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());

// 23
var months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
var date = new Date();
var month = date.getMonth();
console.log(months[month]);

// 24
var elem = document.getElementById('elem');
elem.classList.add('www');

// 25
var elem = document.getElementById('elem');
elem.classList.remove('www');

// 26
var elem = document.getElementById('elem');
var checkClass = elem.classList.contains('www');
console.log(checkClass);

// 27
var elem = document.getElementById('elem');
elem.classList.toggle('www');

// 28
var elem = document.getElementById('elem');
var length = elem.classList.length;
console.log(length);

// 29
var elem = document.getElementById('elem');
var className = elem.classList;

for(var i = 0; i < className.length; i++){
alert("29 Задание " + className[i]);
}

// 30
var elem = document.getElementById('elem');
elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid red;'

// 31
function clickElem(){
    var elem = document.getElementById('elem');
    alert(elem.tagName);
    }

// 32 
function clickElem(){
    var elem = document.getElementById('elem');
    alert(elem.tagName.toLowerCase());
    }

// 33
function clickElem(){
    var elem = document.getElementById('elem');
    alert(elem.tagName.toLowerCase());
    }

// 34
var ol = document.getElementById('ol');
var li = document.createElement('li');
li.innerHTML = 'пункт';
ol.appendChild(li);

// 36
var elem1 = document.getElementById('elem1');
elem1.firstElementChild.style.color = 'red';

// 37
var elem1 = document.getElementById('elem1');
elem1.lastElementChild.style.color = 'red';

// 38
var elem1 = document.getElementById('elem1');
for(var i = 0;i<elem1.children.length;i++){
    elem1.children[i].innerHTML += '!';
}

// 39
var ul = document.getElementById("ul");

ul.addEventListener("click", function func(event) {
	var li = event.target.closest("li");
	

	if (li) {
		li.innerHTML +="!"; 
	}
});


var but = document.getElementsByTagName("button")[0];

but.addEventListener("click", function() {

var liElem = document.createElement("li");
liElem.innerHTML = "пункт";
ul.appendChild(liElem);
});

