import { app, BrowserWindow } from 'electron'
import path from 'path'
import reload from 'electron-reload'

class Main {

    private mainWindow: any = null
    constructor() {

        // Ativa o hot reload para o diretório do aplicativo
        reload(`${__dirname}`, {});

        app.on('ready', this.createWindow);

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            if (this.mainWindow === null) {
                this.createWindow();
            }
        });
    }

    createWindow() {

        const preload = path.join(__dirname, 'preload.js')
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            fullscreen: true,
            webPreferences: {
                javascript: true,
                nodeIntegration: true,
                sandbox: false,
                preload: preload,
                devTools: true

            }
        });

        this.mainWindow.loadFile('index.html');

        // Abre o DevTools (opcional)
        this.mainWindow.webContents.openDevTools();

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }
}

new Main();