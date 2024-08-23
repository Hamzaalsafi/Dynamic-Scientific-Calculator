function update(value)
{
    const display=document.getElementById('display');
   
        display.value+=value;
        updateclearbutton();
    
}
function equals()
{
     const display=document.getElementById('display');
   
    try{
        const result=eval(display.value);
        display.value=result;
    }
    catch(err)
    {
        display.value='error';
    }
   
}
function updateclear(){
    const display=document.getElementById('display');
    display.value='';
    updateclearbutton();
        
}
function updateclearbutton(){
    const display=document.getElementById('display');
    const buttonclear=document.getElementById('clear-button');

    if(display.value=='')
    {
        buttonclear.value='AC';
    }
    else
    {
        buttonclear.value='C';
    }
}
function toggleSign() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);
    
    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}
const toggle=document.querySelector('.toggle input');

toggle.addEventListener('click', () => {
    const onOffLabel = toggle.parentNode.querySelector('.onoff');
   
    if (toggle.checked)
    {
        document.body.classList.add('dark-theme');
    }
    else
    {
        document.body.classList.remove('dark-theme');
    }
});
function sin() {
    display.value = Math.sin(display.value);
    updateclearbutton();
}
function cos() {
    display.value = Math.cos(display.value);
    updateclearbutton();
}
function tan() {
    display.value = Math.tan(display.value);
    updateclearbutton();
}
function power2(){
    display.value = Math.pow(display.value, 2);
    updateclearbutton();
}

function power3(){
    display.value = Math.pow(display.value, 3);
    updateclearbutton();
}
function ln()
{
    display.value = Math.log(display.value);
    updateclearbutton();
}
function pi()
{
    display.value = Math.PI;
    updateclearbutton();
}
function e()
{
    display.value = Math.E;
    updateclearbutton();
}
function sqrt()
{
    display.value = Math.sqrt(display.value);
    updateclearbutton();
}
function abs()
{
    display.value = Math.abs(display.value);
    updateclearbutton();
}
function calculateFactorial() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = factorial(n);
    updateClearButton();
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function xneg(){
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = 1/n;
}