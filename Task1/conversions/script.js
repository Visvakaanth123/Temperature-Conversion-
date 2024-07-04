var text1 = document.getElementById('text1');
var p1 = document.getElementById('p1');
text1.addEventListener('keypress',(event)=> {
    if(event.key=='Enter') {
        const output1 = text1.value;
        display(output1);
    }
});
function display(value) {
    if(!isNaN(value)) {
        p1.textContent='';
        p1.textContent = `Temperature: ${value}`;
    }
    else {
        p1.textContent = 'Enter Numeric value';
    }
}
var text2 = document.getElementById('text2');
var p2 = document.getElementById('p2');
text2.addEventListener('keypress',(event) => {
    if(event.key=='Enter') {
        const output2 = text2.value;
        disp(output2);
    }
})
var p4 = document.getElementById('p4');
var text3 = document.getElementById('farenheit');
var text4 = document.getElementById('kelvin');
function conversion() {
    p3.textContent='';
    if(text2.value=='Celsius') {
        p4.textContent='Farenheit:';
        text3.value=(text1.value * 9/5)+32;
        p5.textContent='Kelvin:';
        text4.value= parseFloat(text1.value)+273;
    }
    else if(text2.value=='Farenheit') {
        p4.textContent='Celsius:';
        text3.value= (text1.value - 32)/1.8;
        p5.textContent='Kelvin:';
        text4.value=(((text1.value-32)*5)/9)+273.15;
    }

    else if(text2.value=='Kelvin') {
        p4.textContent='Celsius:';
        text3.value=parseFloat(text1.value)-273.15;
        p5.textContent='farenheit:'
        text4.value=(text1.value-273.15)*9/5 + 32;
    }
    else {
        p3.textContent='Please make sure the spelling is correct. The first letter must be in uppercase and the rest in lowercase';
    }
}
text2.addEventListener('keypress',(event)=> {
    if(event.key=='Enter') {
        conversion();
    }
})