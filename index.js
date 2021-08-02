var maximize = document.getElementById("maximize");
var minimize = document.getElementById("minimize");

maximize.addEventListener("click", Maximize);
minimize.addEventListener("click", Minimize);

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
    }
}

function Minimize() {
    ipcRenderer.send('minimize');
}

//this code goes in your electron main process
ipcMain.on('minimize', () => {
    win.minimize();
    //win.hide();
  })

var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
var dimensions = mainScreen.size;