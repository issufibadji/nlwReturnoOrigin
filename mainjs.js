//função scroll
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

//função body openMenu
function openMenu() {
    document.body.classList.add('menu-expanded')
}
//função body closeMenu
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//ScrollReveal
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`)