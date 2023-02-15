const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password1=document.getElementById('password1');

form.addEventListener('submit',(event) => {
event.preventDefault();
checkInputs();
});


function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password1Value=password1.value.trim();
if(usernameValue ===''){
setError(username,"Username is required");
} else{
setSuccess(username);
}
if(emailValue===''){
    setError(email,"Email is required");
} else if(!isEmail(emailValue)){
setError(email,'Email must have some special characters')
} else{
    setSuccess(email);
}
if(passwordValue.length>8===''){
    setError(password,'Password must be of 8 characters')
} else{
    setSuccess(password);
}
if(password1Value.length>8===''){
    setError(password,'Password must be of 8 characters')
} else if(password1Value !== passwordValue){
    setError(password1,'Password must be same');
} else{
    setSuccess(password1);
}
}
function setError(input,message){
const inputControl=input.parentElement;
    const small=inputControl.querySelector('small');
small.innerText=message;
form.className='input error';
}
function setSuccess(input){
    const inputControl = input.parentElement;
    inputControl.className='input success';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}