
// step-1 add click event handler whit the submit button

// document.getElementById('btn_submit').addEventListener('click', function(){
    document.getElementById('btn_submit').addEventListener('click', function (e) {
        e.preventDefault()
    // console.log('hello')

    // step-2 get the email address inside the email input the fild

    const emailFlid = document.getElementById('user-email');
    const email = emailFlid.value;
    // console.log(email);

    const passwordFild = document.getElementById('password');
    const password = passwordFild.value;
    // console.log(email, password);

    if(email === 'test@gmail.com' && password === 'submit'){
        // alert('valid user')
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})