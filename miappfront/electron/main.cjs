const { app, BrowserWindow } = require('electron');
const path = require('path');

// Mantén una referencia global del objeto window
let mainWindow;

function createWindow() {
  // Crea la ventana del navegador
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // En desarrollo, carga la URL de desarrollo de Vite
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173/');
    // Abre las herramientas de desarrollo (DevTools)
    mainWindow.webContents.openDevTools();
  } else {
    // En producción, carga los archivos HTML generados
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Emitido cuando la ventana es cerrada
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Este método se llamará cuando Electron haya terminado
// la inicialización y esté listo para crear ventanas del navegador
app.whenReady().then(createWindow);

// Salir cuando todas las ventanas estén cerradas
app.on('window-all-closed', function () {
  // En macOS es común para las aplicaciones y su barra de menú
  // que estén activas hasta que el usuario salga explícitamente con Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // En macOS es común volver a crear una ventana en la aplicación cuando el
  // icono del dock es clicado y no hay otras ventanas abiertas
  if (mainWindow === null) createWindow();
});