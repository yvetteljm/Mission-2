const txt="Yvette Mitchell.";
const myArray=txt.split("");
let loopTimer;

function loopTypeText() {
    if(myArray.length>0){
        document.getElementById("textType").innerHTML+=myArray.shift();
    }else{
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer=setTimeout('loopTypeText()',170);
}
loopTypeText();


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function onClickSubmit() {
   document.getElementById("text").innerHTML = "Request sent.";
  }


let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos=currentScrollPos;
  }  

