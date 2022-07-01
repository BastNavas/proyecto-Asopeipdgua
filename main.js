

let btnProd=document.querySelector("#btnProd");
let galery=document.getElementById("galery");
num=0;
btnProd.addEventListener("click",()=>{
    num++
    //btnProd.innerHTML=num;
    if(num==1){
        galery.style.display="block";
    }
    if(num==2){
        galery.style.display="none";
        num=0;
    }
})

