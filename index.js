var maximize = document.getElementById("maximize")

maximize.addEventListener("click", Maximize)

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
    }
}

ipcMain.on('minimize', () => {
    win.minimize();
    //win.hide();
  })

//this code goes in your electron renderer
ipcRenderer.send('minimize');

var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
var dimensions = mainScreen.size;