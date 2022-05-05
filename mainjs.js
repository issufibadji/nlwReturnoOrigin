//função scroll
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

//função body
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}