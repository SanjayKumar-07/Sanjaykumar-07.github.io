
const pcheck = document.querySelector("#para");
const text = document.querySelector("#text  p").innerHTML;
const resettime = document.querySelector("#outlay");
const timecheck = document.querySelector(".stopwatch");
const  p = document.createElement('p');
const div = document.querySelector(".symbolclock");




var itime;
var timerRunning = false;
var time = [0,0,0,0];

function pad(val) {
    
    if (val <= 9) {
        
        val = "0" + val;
    }
    
    return val;
}


function increment() {
    
    let currentTime = pad(time[0]) + ":" + pad(time[1]) + ":" + pad(time[2]);
    
 timecheck.innerHTML = currentTime;
    time[3]++;
    
    time[0] = Math.floor((time[3]/100)/60);
    time[1] = Math.floor((time[3]/100) - (time[0] * 60));
    time[2] = Math.floor(time[3] - (time[1] * 100) - (time[0] * 6000));
}


function spellCheck() {
    
    let textEntered = pcheck.value;
    let textmatch = text.substring(0, textEntered.length);
  var length=textEntered.length;

    
    if(textEntered == text) {
        
        clearInterval(itime);
          this.removeEventListener('keypress',disable);
        var speedcount= Math.floor(length/(time[0]*60 + time[1]));
         p.innerHTML='Your typing speed is = '+ speedcount+' characters per second.';
      div.appendChild(p);
        
    } else {
        
        if(textEntered  == textmatch) {
          this.removeEventListener('keypress',disable);
          var remaining =text.slice(length);
          var newhtml='<span class="correct-green">'+textmatch+'</span>' + remaining;
          document.querySelector("#text p").innerHTML=newhtml;
          
          
        } else { this.addEventListener('keypress',disable);   
              
                    var remaining2 =text.slice(length);
          var newhtml2='<span class="correct-green">'+textmatch.slice(0,length-1)+'</span><span class="wrong-red">'+textmatch.slice(length-1,length)+'</span>' + remaining2;
          document.querySelector("#text p").innerHTML=newhtml2;          
                       
           
        }
    }
    
}


function start() {
    
    let textEnteredLength = pcheck.value.length;
    
    if (textEnteredLength === 0 && !timerRunning ){
        
        timerRunning = true;
        itime = setInterval(increment, 10);
    }
    
    
}


function reset() {
    
    clearInterval(itime);
    itime = null;
    time = [0,0,0,0];
    timerRunning = false;
    pcheck.value = "";
 timecheck.innerHTML = "00:00:00";
    document.querySelector("#text p").innerHTML="Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open."; 
  if(div.children.length > 2) {
    div.removeChild(p);}
 
   
}

function disable(e){
  e.preventDefault();
}

pcheck.addEventListener("keypress", start, false);
pcheck.addEventListener("keyup", spellCheck, false );
resettime.addEventListener("click", reset, false);

var speedcount= Math.floor(pcheck.value.length/(time[0]*60 + time[2]));