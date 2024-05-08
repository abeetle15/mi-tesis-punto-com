const goHome = document.querySelector('.contGoHome')
const goHomeText = document.querySelector('.goHomeText')
const titulo = document.querySelector('.contTitulo')
const subtitulo = document.querySelector('.subtitulo')



goHome.addEventListener('mouseenter', () => {
  goHomeText.classList.toggle('hover')
  console.log(goHomeText.classList)
})
goHome.addEventListener('mouseleave', () => {
  goHomeText.classList.toggle('hover')
  console.log(goHomeText.classList)
})
titulo.addEventListener('mouseenter', () => {
  subtitulo.classList.toggle('hover')
  console.log(subtitulo.classList)
})
titulo.addEventListener('mouseleave', () => {
  subtitulo.classList.toggle('hover')
  console.log(subtitulo.classList)
})