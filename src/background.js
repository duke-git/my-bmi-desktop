'use strict'
const path = require('path');
import { app, protocol, BrowserWindow, Menu, Tray, ipcMain } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const debug = require('electron-debug');
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let appTray = null
let trayMenu = [
  {
    label: '退出应用',
    click: function () {
      app.quit();
    }
  }
]

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setMenu(null)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}
//系统托盘图标目录
// let trayIcon = path.join(__dirname, './public');
// appTray = new Tray(path.join(trayIcon, 'favicon.ico'));
// const contextMenu = Menu.buildFromTemplate(trayMenu);
// appTray.setToolTip('我的BMI');
// appTray.setContextMenu(contextMenu);
// appTray.on('click', function () {
//   win.show();
// });

//接收最小化命令
ipcMain.on('window-min', function () {
  win.minimize();
})
//接收最大化命令
ipcMain.on('window-max', function () {
  if (win.isMaximized()) {
    win.restore();
  } else {
    win.maximize();
  }
})
//接收关闭命令
ipcMain.on('window-close', function () {
  win.close();
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
    debug();

  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
