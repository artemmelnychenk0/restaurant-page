const menu = () => {
    const content = document.querySelector('#content')
    const element = document.createElement('div')


    const head1 = document.createElement('h3')
    head1.innerHTML = 'Enchiladas'
    head1.classList.add('food1')
    element.appendChild(head1)

    const para1 = document.createElement('p')
    para1.innerHTML = 'An enchilada is a corn tortilla rolled around a filling and covered with a savory sauce.'
    para1.classList.add('para1')
    element.appendChild(para1)

    const pic1 = new Image();
    pic1.src = 'https://images.unsplash.com/photo-1625167359766-1514a5bc6618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    pic1.classList.add('img2')
    element.appendChild(pic1)

    content.appendChild(element);
}
export default menu;