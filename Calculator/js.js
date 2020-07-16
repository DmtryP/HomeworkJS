document.addEventListener("DOMContentLoaded", function (event){
    function calculate(){
        var bill_amount = document.getElementById("bill_amount").value;
        var service_quality = document.getElementById("service_quality").value;
        var people_number = document.getElementById("people_number").value;

        if(!bill_amount || !service_quality){
            alert("Incorrect value!");
        }

        if (people_number % 1 != 0 || !people_number || people_number == 0) {
            alert("Incorrect value!");
            document.getElementById("finalbill").style.display = "none";
        }else{
            var TotalTip = (bill_amount * service_quality) / people_number;
            TotalTip = Math.round(TotalTip * 100)/100;
            TotalTip + TotalTip.toFixed(2);
            document.getElementById("finalbill").style.display = "block";
        }

        document.getElementById("TotalTip").innerHTML = TotalTip;
    }

    document.getElementById("finalbill").style.display = "none";

    document.getElementById("calculate").onclick = function (){
        calculate();
    }

});




