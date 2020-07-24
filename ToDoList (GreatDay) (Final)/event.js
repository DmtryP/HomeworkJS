var input = document.querySelector("input[type = 'text']");
var inputtime = document.querySelector("input[type = 'time']");
var select = document.getElementById("priority");
var ul = document.querySelector("ul");
var body = document.querySelector("body");
var spans = document.getElementsByTagName("span");
var plus_close = document.querySelector("#plus_close");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay");

// Удаление задачи
export function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
        span.parentElement.remove();
        event.stopPropagation();
      });
    }
  }

// Создвние задачи
export function inputListener(){
    input.addEventListener("keypress",function(keyPressed){
      if(keyPressed.which === 13){
        if(ul.offsetHeight <= (body.offsetHeight-350)){
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
}

// Зачеркнуть задачу
export function EndTodo(){
    ul.addEventListener('click', function(ev) {
          if(ev.target.tagName === 'SPANTEXT'){
              ev.target.classList.toggle('checked');
          }
        
      },false
    );
}

var i=1;
// Скрыть/Показать поле создания задачи
export function CloseShow(){
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
}

// Сохранить задачи в LocalStorage
export function setToLocalS(){
    saveBtn.addEventListener('click',function(){
      localStorage.setItem('todoList',ul.innerHTML );
      
    });
}

// Удаление задач из LocalStorage
export function removefromLocalS(){
    clearBtn.addEventListener('click', function(){
      ul.innerHTML= "";
      localStorage.removeItem('todoList',ul.innerHTML );
    });
  }

// Показать Справку
  export function overlayshow(){
    tipsBtn.addEventListener("click",function(){
      overlay.style.height = "100%";
    });
  }

// Скрыть Справку
  export function overlayhide(){
    closeBtn.addEventListener("click",function(e){
      e.preventDefault;
      overlay.style.height = "0";
      
    });
  }