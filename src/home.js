export default function home() {

    const content = document.querySelector('#content')
    const element = document.createElement('div')
    const heading = document.createElement('h2')
    heading.innerHTML = 'Taqueria De Skadovsk'
    heading.classList.add('heading')
    element.appendChild(heading)


    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
    img.classList.add('img1')
    element.appendChild(img);


    const welcome = document.createElement('div');
    welcome.innerHTML = 'This is the best Mexican restaurant which you can find on the seashore of Skadovsk.Find your favorite tacos, nachos, enchiladas, fajitas and of course the best Tequila in the whole Ukraine.'
    welcome.classList.add('para')
    element.appendChild(welcome)


    content.appendChild(element)
}


///remove child 
///or make div empty