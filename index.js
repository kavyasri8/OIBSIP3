let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
function CtoF(){
    let output1 = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value=parseFloat(output1.toFixed(2));
    console.log(output1);
    let output2 = (parseFloat(celsius.value) + 273.15) ;
    kelvin.value=parseFloat(output2.toFixed(2));
    console.log(output2);
}
function FtoC(){
    let output1 = ((parseFloat(fahrenheit.value) - 32) * 5/9 ) ;
    celsius.value=parseFloat(output1.toFixed(2));
    console.log(output1);
    let output2 = ((parseFloat(fahrenheit.value) - 32) * 5/9 ) + 273.15 ;
    kelvin.value=parseFloat(output2.toFixed(2));
    console.log(output2);
}
function KtoC(){
    let output1 = (parseFloat(kelvin.value) - 273.15) ;
    celsius.value=parseFloat(output1.toFixed(2));
    console.log(output1);
    let output2 = ((parseFloat(kelvin.value) - 273.15) * 9/5 ) + 32 ;
    fahrenheit.value=parseFloat(output2.toFixed(2));
    console.log(output2);
}
