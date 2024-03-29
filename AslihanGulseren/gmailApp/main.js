const {app, BrowserWindow,Menu,MenuItem, shell,ipcRenderer,ipcMain} = require('electron')
    const url = require("url");
    const path = require("path");
    //const electronInstaller = require('electron-winstaller');
    let mainWindow
   // const menuNew=require('electron').Menu;
    //const menuNewItem=require('electron').MenuItem;
    let os = require('os')
    let userinf=String(os.userInfo().username);
    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth:350,
        minHeight:355,
        //titleBarStyle: 'hidden',
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule:false, //true
          //contextIsolation: false,
          preload: path.join(__dirname, "preload.js") // use a preload script
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
  //  mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }
    //Notification
    const { Notification } = require('electron')

    const NOTIFICATION_TITLE = 'Welcome'+' '+userinf
    const NOTIFICATION_BODY = 'Welcome to Gmail!'

    function showNotification () {
      new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
    }
    ipcMain.on("notification-show", (event, arg) => {
      new Notification({ title: arg, body: 'You are '+arg }).show()

    })   // app.whenReady().then(createWindow).then(showNotification)
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
          },
          {
          label: "Preferences",
          accelerator: 'cmd+,',
          click() {
            const htmlPath = path.join('file://', __dirname, './src/app/preferences/preferences.component.html')
            let prefWindow = new BrowserWindow({ width: 500, height: 300, resizable: false })
            prefWindow.loadURL(htmlPath)
                  prefWindow.show()
              },
            },
        ]
      },{
        label:'Help',
        click(){shell.openExternal("http://gmail.com/")}

      }
    ])
    /*
    let preferences = {};
    for(var i = 0 ; i < inputs.length; i++){
      preferences[inputs[i].name] = inputs[i].value
      inputs[i].onkeyup = e => {
          preferences[e.target.name] = e.target.value

          ipcRenderer.send(PREFERENCE_SAVE_DATA_NEEDED, preferences)
      }
  }
  ipcMain.on(PREFERENCE_SAVE_DATA_NEEDED, (event, preferences) => {
    inputs = preferences
})
*/
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
      //if (process.platform !== 'darwin')
      app.quit()
    })

    app.on('activate', function () {
      //if (mainWindow === null)
      createWindow()
    })

    ipcMain.on('asynchronous-message', (event, arg) => {
      console.log( arg ); });
    Menu.setApplicationMenu(dockMenu)
/*
    const saveHtml = exports.saveHtml = (targetWindow, content) => {
      const file = dialog.showSaveDialog(targetWindow, {
        title: 'Save HTML',
        defaultPath: app.getAppPath(),
        filters: [
          { name: 'HTML Files', extensions: ['html', 'htm'] }
        ]
      });

      if (!file) return;

      fs.writeFileSync(file, content);
    };
*/

const iconName = path.join(__dirname, 'iconForDragAndDrop.png');
ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: filePath,
    icon: iconName
  })
})

//session.defaultSession.allowNTLMCredentialsForDomains('*');
/*
async function createWindowsExe(){
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: '/tmp/build/my-app-64',
      outputDirectory: '/tmp/build/installer64',
      authors: 'Aslihan Gulseren.',
      exe: 'gmailApp.exe'
    });
    console.log('It worked!');
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }
}
*/
// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.


