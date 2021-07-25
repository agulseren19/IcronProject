const {app, BrowserWindow,ipcMain} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    

    ipcMain.on('ondragstart', (event, filePath) => {
      event.sender.startDrag({
        file: filePath,
        icon: 'iconForDragAndDrop.png'
      })
    })
    
    const { Notification } = require('electron')

    const NOTIFICATION_TITLE = 'Basic Notification'
    const NOTIFICATION_BODY = 'Notification from the Main process'
    
    function showNotification () {
      new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
    }
    
    app.whenReady().then(createWindow).then(showNotification)
    
   
    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
            enableRemoteModule:true,
            contextIsolation:true,
            preload: path.join(__dirname, "preload.js") // use a preload script
            
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/AlperenGmail/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })