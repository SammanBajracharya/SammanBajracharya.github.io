const menuBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-xmark')
const primaryNav = document.querySelector('.primary-navigation')

const visibility = primaryNav.getAttribute('data-visible')

menuBtn.addEventListener('click', e => {
  primaryNav.setAttribute('data-visible', true)
})

closeBtn.addEventListener('click', e => {
  primaryNav.setAttribute('data-visible', false)
})