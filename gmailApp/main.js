const {app, BrowserWindow,Menu,MenuItem, shell} = require('electron')
    const url = require("url");
    const path = require("path");
    let mainWindow
   // const menuNew=require('electron').Menu;
    //const menuNewItem=require('electron').MenuItem;

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth:350,
        minHeight:355,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/gmailApp/index.html`),
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
    //Notification
    const { Notification } = require('electron')

    const NOTIFICATION_TITLE = 'Welcome'
    const NOTIFICATION_BODY = 'Welcome to Gmail!'

    function showNotification () {
      new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
    }

   // app.whenReady().then(createWindow).then(showNotification)
  //dockMenu
    const dockMenu=Menu.buildFromTemplate([
      {
        label:'Menu',
        submenu:[
          {label:'New Window'},{
            label:'Exit',
            click(){app.quit()}
          },
          {
            label:"Real Gmail",
            click(){shell.openExternal("http://gmail.com/")}
          }
        ]
      }
    ])

    app.whenReady().then(()=>{
      if(process.platform=='darwin'){
        app.dock.setMenu(dockMenu)
      }
    }).then(createWindow).then(showNotification);
//Context menu
    /*
    app.whenReady().then(()=>{
      if(mainWindow!=undefined){
      const ctxMenu=new menuNew();
      ctxMenu.append(new menuNewItem(
        {label: 'Copy'}
      ))
      ctxMenu.append(new MenuItem({role:'selectall'}))
      mainWindow.webContents.on('context-menu',function(e,params){
          ctxMenu.popup(mainWindow,params.x,params.y)
        })
    }})
*/
    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })


