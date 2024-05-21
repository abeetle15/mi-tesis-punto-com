const contInfo = document.querySelector('.contInfo')
const contNotes = document.querySelector('.contNotes')
const contBitacora = document.querySelector('.contBitacora')
const contReferentes = document.querySelector('.contReferentes')

const infoText = document.querySelector('.infoText')
const notesText = document.querySelector('.notesText')
const bitacoraText = document.querySelector('.bitacoraText')
const referentesText = document.querySelector('.referentesText')





contInfo.addEventListener('mouseenter', () => {
  infoText.classList.toggle('hover')

})
contInfo.addEventListener('mouseleave', () => {
  infoText.classList.toggle('hover')

})

contNotes.addEventListener('mouseenter', () => {
  notesText.classList.toggle('hover')

})
contNotes.addEventListener('mouseleave', () => {
  notesText.classList.toggle('hover')

})

contBitacora.addEventListener('mouseenter', () => {
  bitacoraText.classList.toggle('hover')

})
contBitacora.addEventListener('mouseleave', () => {
  bitacoraText.classList.toggle('hover')

})

contReferentes.addEventListener('mouseenter', () => {
  referentesText.classList.toggle('hover')

})
contReferentes.addEventListener('mouseleave', () => {
  referentesText.classList.toggle('hover')

})


