import home from "./home";
import menu from "./menu"
import contact from "./contact"
import './style.css'

const content = document.querySelector('#content')
const btn1 = document.querySelector('#home')
const btn2 = document.querySelector('#menu')
const btn3 = document.querySelector('#contact')
home();
btn1.addEventListener('click', () => {
    if (content.innerHTML == '') {
        home()
    } else {
        content.innerHTML = ''
        home()
    }
})

btn2.addEventListener('click', () => {
    if (content.innerHTML == '') {
        menu()
    } else {
        content.innerHTML = ''
        menu()
    }
})

btn3.addEventListener('click', () => {
    if (content.innerHTML == '') {
        contact()
    } else {
        content.innerHTML = ''
        contact()
    }
})




// document.body.appendChild(home())
// document.body.appendChild(menu())
// document.body.appendChild(contact())