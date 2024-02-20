var nameError = document.querySelector('.name-msg');
var emailError = document.querySelector('.email-msg');
var passError = document.querySelector('.pass-msg');
var repeatPassError = document.querySelector('.repeat-pass-msg');
var phnError = document.querySelector('.phn-msg');



function validateName(){
    
    let name = document.querySelector('#name').value;
    var icon = document.querySelector('.container .form-details .icon-name');

    if(name.length == 0){
        nameError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Enter your name';
        icon.innerHTML='';
    }

    else if(!name.match(/^[A-Za-z]+$/)){
        nameError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Name should be in alphabets and no spaces in-between';
        icon.innerHTML='';
    }
    else{
        icon.innerHTML='<i class="fa-regular fa-circle-check" style="color: #03e29f;"></i>';
        nameError.innerHTML='';
    }
    return true;
}

function validateEmail(){
    
    let email = document.querySelector('#email').value;
    var icon = document.querySelector('.container .form-details .icon-email');


    if(email.length == 0){
        emailError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Enter your Email id';
        icon.innerHTML='';
    }

    else if(!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
        emailError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Enter a valid Email id';
        icon.innerHTML='';
    }
    else{
        icon.innerHTML='<i class="fa-regular fa-circle-check" style="color: #03e29f;"></i>';
        emailError.innerHTML='';
    }
    return true;
}

function validatePass(){
    let pass = document.querySelector('#pass').value;
    let icon = document.querySelector('.container .form-details .icon-pass');

    if(pass.length < 8){
        passError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Password must be 8 characters';
        icon.innerHTML='';
    }
    else{
        icon.innerHTML='<i class="fa-regular fa-circle-check" style="color: #03e29f;"></i>';
        passError.innerHTML='';
    }
    return true;
}

function validateRepeatPass(){
    let pass = document.querySelector('#pass').value;
    let repeatPass = document.querySelector('#repeat-pass').value;
    let icon = document.querySelector('.container .form-details .icon-repeat-pass');

    if(repeatPass != pass){
        repeatPassError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Password does not match';
        icon.innerHTML=''
    }
    else if(repeatPass == ''){
        repeatPassError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Re-enter password';
        icon.innerHTML=''
    }
    else{
        icon.innerHTML='<i class="fa-regular fa-circle-check" style="color: #03e29f;"></i>';
        repeatPassError.innerHTML='';
    }
    return true;
}

function validatePhn(){
    let phn = document.querySelector('#phn-num').value;
    let icon = document.querySelector('.container .form-details .icon-phn');

    if(phn == 0){
        phnError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> Enter your mobile number';
        icon.innerHTML=''
    }
     else if(!phn.match(/^[0-9]{10}$/)){
        phnError.innerHTML='<i class="fa-regular fa-circle-xmark" style="color: rgb(255, 71, 71);"></i> mobile number should be in 10 digits';
        icon.innerHTML='';
    }
    else{
        phnError.innerHTML=''
        icon.innerHTML='<i class="fa-regular fa-circle-check" style="color: #03e29f;"></i>';
    }
    return true;
}

function validateForm(){
    validateName();
    validateEmail();
    validatePass();
    validateRepeatPass();
    validatePhn();
}

