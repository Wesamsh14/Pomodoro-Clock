let second=0,
    minute=24,
    timex;

function plus(){
    minute++;
    if (minute>60) minute=0;

document.getElementById("minute").innerHTML = minute;}

function minus(){
    minute--;
    if (minute<0){minute=60;
}

document.getElementById("minute").innerHTML = minute;}
function startTime(){
   
    timex= setInterval(timer, 1000);
}
    $("#start").click(function(){
        
      });

function timer(){
    second--;
    if(second===-1){
        minute--;
        second=59;
        if(minute===-1){
            minute='00';
            second='00';
            clearInterval(timex);
            alert('the time is finish');
        }
        
    }
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}
function pause(){
    
    clearInterval(timex);
    //alert('the time is finish');
}
function repeat(){
    location.reload();
}