if(document.querySelector('#drag')!=undefined){
document.querySelector('#drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('drag-and-drop.txt')
}
}
