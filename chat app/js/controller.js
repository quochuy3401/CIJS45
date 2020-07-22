const controller ={}
controller.register=(data)=>{
    document.getElementById('first-name-error').innerText='';
    document.getElementById('last-name-error').innerText='';
    document.getElementById('email-error').innerText='';
    document.getElementById('password-error').innerText='';
    document.getElementById('confirm-password-error').innerText='';
    if(data.firstName===''){
        document.getElementById('first-name-error').innerText='*Please input first name.'
    }
    if(data.lastName===''){
        document.getElementById('last-name-error').innerText='*Please input last name.'
    }
    if(data.email===''){
        document.getElementById('email-error').innerText='*Please input email.'
    }
    if(data.password===''){
        document.getElementById('password-error').innerText='*Please input password.'
    }
    if(data.confirmPassword===''){
        document.getElementById('confirm-password-error').innerText='*Please confirm password.'
    }
    if(data.password != data.confirmPassword && data.password!='' && data.confirmPassword!=''){
        document.getElementById('confirm-password-error').innerText='*Password is not available.'
    }
};
controller.login=(data) =>{
    document.getElementById('email-error').innerText='';
    document.getElementById('password-error').innerText='';
    if(data.email===''){
        document.getElementById('email-error').innerText='*Please input email.'
    }
    if(data.password===''){
        document.getElementById('password-error').innerText='*Please input password.'
    }
}