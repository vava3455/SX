const {app, BrowserWindow} = require('electron')

  function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600, autoHideMenuBar: true})
    win.loadFile('index.html')
    win.setTitle("Sprix")
  }
  function menuTest(){
    
  }

  app.on('ready', createWindow)
