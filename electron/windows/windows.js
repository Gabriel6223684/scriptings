const { BrowserWindow } = require("electron")
const path = require("path")

function createMainWindow() {

    const win = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {
            preload: path.join(__dirname, "../preload.js"),
            contextIsolation: true
        }
    })

    win.loadFile(path.join(__dirname, "../../src/main/index.html"))

    return win
}

module.exports = {
    createMainWindow
}