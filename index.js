let count = 1;
var bgcolor = "hsl(206, 94%, 87%)";
var chk = document.querySelectorAll('#chck');

if(count==1){
    document.querySelector("#bg1").style.background = bgcolor;
    document.querySelector("#bg1").style.color = "black";
    document.querySelector("#bg1").style.borderStyle = "none";
}

function nextButton() {
    if(count<5){
        count = count+1;
    }

    if(count==4){
        document.querySelector(".next").innerText = "Confirm";
        checkBoxCheck();
    }

    if(count==3){
        for (var i = 0; i < chk.length; i++){
	        chk[i].checked = false ;
        }
    }

    if(count>1){
        document.querySelector(".back").style.display = "block";
    }
    
    if(count==5){
        document.querySelector(".back").style.display = "none";
        document.querySelector(".next").style.display = "none";
    }

    for(let i=1;i<=5;i++){
        document.querySelector(`.step${i}`).style.display = `${i==count ? "block" : "none"}`;
        document.querySelector(`#bg${i}`).style.background = `${i==count ? bgcolor : "none"}`;
        document.querySelector(`#bg${i}`).style.color = `${i==count ? "black" : "hsl(0, 0%, 100%)"}`;
        document.querySelector(`#bg${i}`).style.borderStyle = `${i==count ? "none" : "solid"}`;
    }

}

function goBackButton() {
    if(count>1){
        count = count-1;
    }

    if(count!=4){
        document.querySelector(".next").innerText = "Next Step";
    }

    if(count==1){
        document.querySelector(".back").style.display = "none";
    }

    for(let i=1;i<=5;i++){
        document.querySelector(`.step${i}`).style.display = `${i==count ? "block" : "none"}`;
        document.querySelector(`#bg${i}`).style.background = `${i==count ? bgcolor : "none"}`;
        document.querySelector(`#bg${i}`).style.color = `${i==count ? "black" : "hsl(0, 0%, 100%)"}`;
        document.querySelector(`#bg${i}`).style.borderStyle = `${i==count ? "none" : "solid"}`;
    }

    // for(let i=1;i<=5;i++){
    //     if(i == count){
    //         document.querySelector(`.step${i}`).style.display = "block"
    //     }
    //     else{
    //         document.querySelector(`.step${i}`).style.display = "none";
    //     }
    // }
}

function timeperiod() {
    if(document.querySelector("#check").checked){
        document.querySelector(".yearly").style.display = "grid";
        document.querySelector(".monthly").style.display = "none";

        document.querySelector(".yearlyc").style.display = "block";
        document.querySelector(".monthlyc").style.display = "none";
    }
    else{
        document.querySelector(".yearly").style.display = "none";
        document.querySelector(".monthly").style.display = "grid";

        document.querySelector(".yearlyc").style.display = "none";
        document.querySelector(".monthlyc").style.display = "block";
    }
}

function checkBoxCheck(){
    var inputElements = document.getElementsByClassName('option');
    var checkedValue = null;
    var checkedDataValue = null;
    var total = 0;

    document.querySelector(".summary").innerHTML = "";
    var divTag = document.querySelector(".summary");
    var divTotal = document.querySelector(".total");
    divTotal.innerHTML = "";
    
    for(var i=0; i<inputElements.length; i++){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            checkedDataValue = inputElements[i].dataset.value;
             total += parseInt(checkedDataValue);

             var item = document.createElement("div");
             item.classList.add("item");
             
             var printValue = document.createElement("p");
             var printDataValue = document.createElement("p");
             
             printValue.classList.add("name");
             printValue.innerHTML = checkedValue;

             printDataValue.setAttribute('id' , 'cost');
             if(document.querySelector("#check").checked){
                printDataValue.innerHTML = "$"+checkedDataValue+"/yr";
             }
             else{
                printDataValue.innerHTML = "$"+checkedDataValue/10+"/mo";
             }

            //  if(i==0){
            //     printValue.setAttribute('id','first-item');
            //     printDataValue.setAttribute('id','first-item');
            //     item.setAttribute('id' , 'mar');
            //  }

             item.append(printValue , printDataValue);
             divTag.append(item);
        }
    }
      var item = document.createElement("div");
      var print = document.createElement("p");
      var printTotal = document.createElement("p");
      printTotal.setAttribute('id' , 'total');
      if(document.querySelector("#check").checked){
        print.innerHTML = "Total(per year)";
        printTotal.innerHTML = "$"+total+"/yr";
      }
      else{
        print.innerHTML = "Total(per month)";
        printTotal.innerHTML = "$"+total/10+"/mo";
      }
      divTotal.append(print , printTotal);
}