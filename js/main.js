window.addEventListener('scroll', rolagem)

function rolagem() {
  showNavOnScroll()
}

function menuexpansion() {
  document.body.classList.add('menu-expanded')
}
function exitmenuexpansion() {
  document.body.classList.remove('menu-expanded')
}
function showNavOnScroll() {
  if (scrollY == 0) {
    navegador.classList.remove('scroll')
  } else {
    navegador.classList.add('scroll')
  }
}
