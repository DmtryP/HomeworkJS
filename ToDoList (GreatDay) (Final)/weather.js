// Обращение к API openweathermap.org и вывод температуры в index.html
$(document).ready(function() {
    $.get(
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id" : "520555",
            "appid" : "c8e5169c45235f875783137b3d2a60b1"
        },
        function (data){
            var temp = data.main.temp;
            temp -= 273;
            temp = Math.round(temp * 1)/1;
            document.getElementById("temp").innerHTML = temp;
            
            
        }
    );
    
});