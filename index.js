
const input=document.querySelector(".inp");
const lg=document.getElementById("values");

input.addEventListener("input", updateValue);

function getRandomPositiveInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * ( max - min + 1 ) +min);
}

var randomInts=getRandomPositiveInt(1,100);
console.log(randomInts);

function updateValue(e){
    var inp=e.target.value;
    var diffInputRandom=randomInts-inp;
    console.log(diffInputRandom);

    if(diffInputRandom > 20 ){
        lg.textContent="You are not even close !";
        document.getElementById("values").style.color="#ff0000";
    }

    else if(diffInputRandom > 10 && diffInputRandom <= 20){
        lg.textContent="You are almost there !";
        document.getElementById("values").style.color="#ffa700";
    }
    
    else if(diffInputRandom <10 && diffInputRandom >= 5){
        lg.textContent="You are very close !"
        document.getElementById("values").style.color="#fff400";
    }
    
    else if(diffInputRandom < 5 && diffInputRandom >= 3){
        lg.textContent="You are very very close !"
        document.getElementById("values").style.color="#a3ff00";
    }
    
    else if(diffInputRandom <= 2 && diffInputRandom >0){
        lg.textContent="You are a centimeter away !"
        document.getElementById("values").style.color="#2cba00";
    }
    
    else if(diffInputRandom==0){
        lg.textContent="You got it correct   : ) "
        document.getElementById("values").style.color="darkgreen";
    }
    
    else if(diffInputRandom < 0 && diffInputRandom >= -2){
        lg.textContent="You are a centimeter away !";
        document.getElementById("values").style.color="#2cba00";
    }
    
    else if(diffInputRandom <= -3 && diffInputRandom >= -5){
        lg.textContent="You are very, very close !";
        document.getElementById("values").style.color="#a3ff00";
    }
    
    else if(diffInputRandom < -5 && diffInputRandom >= -10){
        lg.textContent="You are very close !";
        document.getElementById("values").style.color="#fff400";
    }
    
    else if(diffInputRandom < -10 && diffInputRandom >= -20){
        lg.textContent="You are almost there !";
        document.getElementById("values").style.color="#ffa700";
    }
    
    else if(diffInputRandom < -20){
        lg.textContent="You are not even close !";
        document.getElementById("values").style.color="#ff0000";
    }
  
}

addEventListener("click", function(l){
    var btn_id=l.target.id;
    if(btn_id=="reset"){
        window.location.reload();
        document.querySelector(".inp").value="";
    }
})