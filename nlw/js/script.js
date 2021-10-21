//DOM - DOCUMENT OBJECT MODEL

/* Abre e fecha o menu quando clicar no ícone: hambúrguer e X */
const nav = document.querySelector('#header nav') // objeto vai procurar o #header nav
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle) //coloca no console do F12

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //scroll é menor que a altura do header
        header.classList.remove('scroll')
    }
})

//Testimonials carrousel slider swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    `,
    { interval: 100 }
)

/* 

// char - string
'um texto aqui'

//number
12345

//boolean: true ou false
true
false 

{{
    name:'carro',
    cor: 'vermelho'
    correr: function(){
        
    }
}}

const people = {
    name: 'Daniel Dantas',
    age: 20,
    falar: function () {
        alert(people.name)
    }
}

people.falar()

*/
