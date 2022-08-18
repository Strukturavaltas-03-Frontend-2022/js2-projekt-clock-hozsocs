const element=document.querySelector(".clock");
const clock=() =>{
    let actualdate= new Date();
    let ora=actualdate.getHours();
    let perc=actualdate.getMinutes();
    let mp=actualdate.getSeconds();
    let p=0;
    let m=0;
        
    if (mp<10) {m="0"} else m="";
    if (perc < 10) {p="0"} else p="";
    
element.innerHTML= ora + ":" + p + perc + ":" + m + mp;
setTimeout('clock()',1000);
};

clock();


