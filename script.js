function clock() {
    var hours=document.getElementById("N_hours");
    var minutes=document.getElementById("N_minutes");
    var seconds = document.getElementById("N_seconds");     

  // Universal time take from the system
    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;

    if (a>12) {
        document.getElementById('am').innerHTML = "PM"; // for change the AM and PM.
        var hours_12 = time.getHours() - 12;
        hours.innerHTML = hours_12;           // this is for the 12 hours format.
  }

   
}
setInterval(clock, 1000);

// for the blinking the seconds colon to written the function startBlinking
function startBlinking() {
  setInterval(function () { 
    blink();
  }, 1000);
}


// following function for to blink colon by seconds. 
function blink() {
  
  document.getElementById('scolon').style.visibility = "hidden";
  setTimeout(function () {
    document.getElementById('scolon').style.visibility = "visible";
  }, 500);
}
startBlinking();



// Dyamically div is added when we are set the time.
function Makediv() {
  var container = document.createElement('div');
  
  document.getElementById('status-block').appendChild(container);
  container.id = "dynamic-block";

  var invalue1 = document.getElementById('WakeTime');
  var value1 = invalue1.options[invalue1.selectedIndex].text;
  var main1=container.innerHTML = "Wake Up Time" + ": " + value1;
 

  var invalue2 = document.getElementById('LunchTime');
  var value2 = invalue2.options[invalue2.selectedIndex].text;
  var main2=container.innerHTML = "\n Lunch Time" + ": " + value2;


  var invalue3 = document.getElementById('NapTime');
  var value3 = invalue3.options[invalue3.selectedIndex].text;
  var main3=container.innerHTML = "\n Nap Time" + ": " + value3;
  
  
    var i = document.getElementById('WakeTime').value;
    var j = document.getElementById('LunchTime').value;
    var k = document.getElementById('NapTime').value;
  if (i==0&&j==0&&k==0) {
    container.innerHTML = "";
  }
  else if (i!=0&&j==0&&k==0) {
    container.innerHTML = main1;
  }
  else if (i==0&&j!=0&&k==0) {
    container.innerHTML = main2;
  }
  else if (i==0&&j==0&&k!=0) {
    container.innerHTML = main3;
  }
  else if (i!=0&&j!=0&&k==0) {
    container.innerHTML = main1+main2;
  }
  else if (i!=0&&j==0&&k!=0) {
    container.innerHTML = main1+main3;
  }
  else if (i==0&&j!=0&&k!=0) {
    container.innerHTML = main2+main3;
  }
  else if (i!=0&&j!=0&&k!=0) {
    container.innerHTML = main1+main2+main3;
  }

}


// settime() function is to set the time of waketime, lunchtime and Naptime.
function settime() {
    var i = document.getElementById('WakeTime').value;
    var j = document.getElementById('LunchTime').value;
  var k = document.getElementById('NapTime').value;
    // var new_hours = new Date().getHours();
  
  if ((i == 0) && (j == 0) && (k == 0)) {
        document.getElementById('mainImg').style.backgroundImage = "url(Images/flare.jpg)";
    document.getElementById('imgtext').innerHTML = "";
    document.getElementById('dynamic-block').remove();
   
  }
  else if ((i!=0)&&(j==0)&&(k==0)) {
        document.getElementById('mainImg').style.backgroundImage = "url(Images/wakeup_image.png)";
    document.getElementById('imgtext').innerHTML = "Good Morning";
    Makediv();
     
    }
    else if (((i!=0)&&(j!=0)&&(k==0))||((i==0)&&(j!=0)&&(k==0))) {
        document.getElementById('mainImg').style.backgroundImage = "url(Images/lunch_image.png)";
    document.getElementById('imgtext').innerHTML = "Lets Have Lunch";
      Makediv();
        
    }
   else if (((i!=0)&&(j!=0)&&(k!=0))||((i==0)&&(j==0)&&(k!=0))||((i==0)&&(j!=0)&&(k!=0))||((i!=0)&&(j==0)&&(k!=0))) {
        document.getElementById('mainImg').style.backgroundImage = "url(Images/goodnight_image.png)";
    document.getElementById('imgtext').innerHTML = "Lets Have Nap Time";
      Makediv();
        
  }
  
  
}