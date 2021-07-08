function updateOnlineStatus () {
  document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)
document.getElementById('yes').innerText="jsjf";

updateOnlineStatus()
