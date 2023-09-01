const { url } = require("inspector")
const { stubFalse } = require("lodash")

const btnSignIn = document.getElementById('sign-in')
const btmSignUp = document.getElementById('sign-up')
const formRegister =document.querySelector('.register')
const formLogin = document.querySelector('.login')

btnSignIn.addEventListener('click', e => {
    formRegister.classList.add('hide');
    formLogin.classList.remove('hide');
})

btmSignUp.addEventListener('click', e => {
    formLogin.classList.add('hide');
    formRegister.classList.remove('hide');
})


const formulario = document.querySelector('.form')
const inputs = document.querySelectorAll('.form input')
console.log(inputs)

const expresionesRegulares = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}
const campos = {
    name: false,
    email: false,
    password: false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresionesRegulares.nombre, e.target.value, 'name')
            break;
        case 'email':
            validarCampo(expresionesRegulares.email, e.target.value, 'email')
            break;
        case 'password':
            validarCampo(expresionesRegulares.password, e.target.value, 'password')
            break;
        default:
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input)) {
        document.getElementById(campo).classList.remove('error');
        campos[campo] = true;
        } else {
            document.getElementById(campo).classList.add('error');
            campos[campo] = true;
        }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    if(campos.name && campos.email && campos.password){
        document.querySelector('.check_notify').classList.add('active');
        document.querySelector('.error_notify').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.check_notify').classList.remove('active');
        }, 5000);
    } else {
        document.querySelector('.error_notify').classList.add('active');
        document.querySelector('.check_notify').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.error_notify').classList.remove('active');
        }, 7000);
    }
})

$("#formSubmitRegister").on("submit" , data => {
    let name = data.target[0].value
    if(name == ""){
        return false
    }
    let email = data.target[1].value
    if(email == "") {
        return false
    }
    let password = data.target[1].value
    if(password == "") {
        return false
    }
    if(true) {
        let dataUser = {
            email: email,
            password: password
        }
        register(dataUser)
    }
})
$("#formSubmitLogin").on("submit" , data =>{
    console.log(data.target[0].value)
    let email = data.target[0].value
    if(email == ""){
        return false
    }
    let password = data.target[1].value
    if(password == "") {
        return false
    }
    if(true) {
        let dataUser = {
            email: email,
            password: password
        }
        login(dataUser)
    }
})
function login (data) {
    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: data,
    })
}
function register (data) {
    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/register",
        data: data,
    })
}