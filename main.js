console.log('Garuda Travels');

let username = document.getElementById('name');
let email = document.getElementById('email');


let nameValidation = false;
let emailValidation = false;


//we can also use blur event listener blur will work when we click in th box and then the outside of the box
username.addEventListener('input', ()=>{
    console.log('Name is blured')
    // Validating Name
    let regex = /^[a-zA-Z]([a-zA-Z]){2,20}$/;
    let str = username.value;
    console.log(regex, str);
    let validate =  regex.test(str);
    if (validate) {
        console.log('your name is validated')
        username.classList.remove('is-invalid');
        nameValidation = true;
    } else {
        console.log('your name is Invalid')
        username.classList.add('is-invalid');
        nameValidation = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log('Email is blured')
    // Validating Email 
    let regex = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    let validate =  regex.test(str);
    if (validate) {
        console.log('your email is validated')
        email.classList.remove('is-invalid');
        emailValidation = true;
    } else {
        console.log('your email is Invalid')
        email.classList.add('is-invalid');
        emailValidation = false;
    }
})

let message = document.getElementById('message');

let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    if (nameValidation && emailValidation) {
        //Submit you form
        message.innerHTML = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success!</strong> Your travel request has been successfully submited. 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`

    } else {
        console.log(nameValidation, emailValidation, phoneValidation);
        message.innerHTML = `<div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Something went wrong!</strong> Please entre your name, phone number and email correctly. 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`
    }
    
})
