const { contextBridge, ipcRenderer } = require('electron')
const path = require('path')
contextBridge.exposeInMainWorld('electron', {
  startDrag: (fileName) => {
    ipcRenderer.send('ondragstart', path.join(process.cwd(), fileName))
  }
})
contextBridge.exposeInMainWorld('electronn', {
  updateOnlineStatus:(arg)=>{
    ipcRenderer.send("notification-show",arg)

  }
})
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
