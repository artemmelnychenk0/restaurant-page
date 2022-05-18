const contact = () => {
    const content = document.querySelector('#content')
    const element = document.createElement('div')

    const contact1 = document.createElement('h3');
    contact1.innerHTML = 'Manager'
    contact1.classList.add('contact1')
    element.appendChild(contact1);
    const info1 = document.createElement('p');
    info1.innerHTML = 'Name: Diego Maradona, Phone:054-235-223'
    info1.classList.add('info1')
    element.appendChild(info1)

    content.appendChild(element)
}

export default contact;