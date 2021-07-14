
if(document.querySelector('#drag')!=undefined){
document.querySelector('#drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('drag-and-drop.txt')
}
}
/*
function updateOnlineStatus () {
  if( document.getElementById('status')!=null){
    if(navigator.onLine){
      ipcRenderer.send("notification-show", 'online');
    }
    else{
      ipcRenderer.send("notification-show", 'offline');
    }
  document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
*/
function updateO () {
  if( document.getElementById('status')!=null){
    window.electronn.updateOnlineStatus(navigator.onLine ? 'online' : 'offline')
  }
}


window.addEventListener('online', updateO)
window.addEventListener('offline', updateO)

updateO()
