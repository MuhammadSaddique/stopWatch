
let [milisec,second,minutes] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    milisec++;
    milisec.innerHTML
    if(milisec == 100){
        milisec = 0;
        second ++;
        if(second == 60){
            second = 0;
            minutes++
        }
    }
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = second <10 ? "0" + second : second;
    let ms = milisec <10 ? "0" + milisec : milisec;
    displayTime.innerHTML = m+":"+s+":"+ms;
}


function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,10)
}

function watchstop(){
    clearInterval(timer)
}
function watchreset(){
    clearInterval(timer);
  [milisec,second,minutes] = [0,0,0];
    displayTime.innerHTML = "00:00:00";

}





