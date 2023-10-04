const email = document.forms['signup']['email']
const password = document.forms['signup']['pass']
const _name = document.forms['signup']['name']
const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    check()
})

const check = ()=>{

    // name validation *********

    if(_name.value == "" || _name.value == null){
        _name.style.border='1px solid red'
        _name.style.outline='1px solid red'
        _name.nextElementSibling.style.display='inline'
        _name.nextElementSibling.innerText='Name Cannot Be Empty'
    }else if(isNameValid(_name.value)){
        _name.style.border='1px solid red'
        _name.style.outline='1px solid red'
        _name.nextElementSibling.style.display='inline'
        _name.nextElementSibling.innerText='Name Is Not Valid'
    }else{
        _name.style.border='1px solid green'
        _name.style.outline='1px solid green'
        _name.nextElementSibling.style.display='none'

    }

    // email validation *********

    if(email.value=='' || email.value== null){
        email.style.border='1px solid red'
        email.style.outline='1px solid red'
        email.nextElementSibling.style.display='inline'
        email.nextElementSibling.innerText='Email Cannot Be Empty'
    }else if(!isEmailValid(email.value)){
        email.style.border='1px solid red'
        email.style.outline='1px solid red'
        email.nextElementSibling.style.display='inline'
        email.nextElementSibling.innerText='Email Is Not Valid'
    }else{
        email.style.border='1px solid green'
        email.style.outline='1px solid green'
        email.nextElementSibling.style.display='none'

    }

    // pass validation *********
    
    if(password.value=='' || password.value== null){
        password.style.border='1px solid red'
        password.style.outline='1px solid red'
        password.nextElementSibling.style.display='inline'
        password.nextElementSibling.innerText='Password Cannot Be Empty'
    }else if(!isPassValid(password.value)){
        password.style.border='1px solid red'
        password.style.outline='1px solid red'
        password.nextElementSibling.style.display='inline'
        password.nextElementSibling.innerText='Password Is Not Valid'
    }else{
        password.style.border='1px solid green'
        password.style.outline='1px solid green'
        password.nextElementSibling.style.display='none'

    }
    
}

const isNameValid =(name)=>{
    return /[^a-zA-Z]/.test(name)
}

const isEmailValid=(email)=>{
    return/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,})$/.test(email)
}

const isPassValid=(pass)=>{
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(pass)
}


// ****************end validation


let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let flag = 0



document.getElementsByClassName('signIn')[0].addEventListener('click',()=>{
    if(flag%2==1){
        box1.style.left='0'
        box2.style.left='50%'
        setTimeout(() => {
            box1.children[0].innerText='Welcome Back!'
            box1.children[1].innerText='To keep connected with us please login with your personal info.'
            box1.children[2].innerText='Sign In'

            box2.children[0].innerText='Create Account'
                box2.children[2].children[0].style.display='block'
                box2.children[2].children[0].nextElementSibling.style.opacity='1'
                document.getElementById('btn').innerText='Sign Up'
        }, 400);
        flag++
    }else{
        box1.style.left='50%'
        box2.style.left='0'
            setTimeout(() => {
                box1.children[0].innerText='Hello,Friend!'
                box1.children[1].innerText='Enter your personal details and start journey with us.'
                box1.children[2].innerText='Sign Up'

                box2.children[0].innerText='Sign In'
                box2.children[2].children[0].style.display='none'
                box2.children[2].children[0].nextElementSibling.style.opacity='0'
                document.getElementById('btn').innerText='Sign In'
            }, 400);
        flag++
    }

})