const shell = {};

function Shell_Init() {
    shell.width = api.glconfig(qvm.ui, "width");
    shell.height = api.glconfig(qvm.ui, "height");
    shell.onMap = api.shell("onMap");
    color.init(qvm.ui);
    
    shell.desktop = {};
    shell.desktop.window = ui.window(0, "", "Desktop", "none", UI.NOTITLE|UI.NOSCALE|UI.NOZORDER, 0, 0, shell.width, shell.height, color.white, color.empty, color.empty);
    
    shell.apps = {};
    shell.apps.window = ui.window(1, "", "App launcher", "none", UI.NOTITLE|UI.NOSCALE, 0, 0, 640, 540, color.white, color.empty, color.empty);
    shell.apps.w = api.window(shell.apps.window, "baseW");
    shell.apps.h = api.window(shell.apps.window, "baseH");
    shell.apps.background = ui.button(shell.apps.window, -1, 0, 0, 640, 512, "", UI.CENTER|UI.BOLD|UI.NO_TOP_LEFT|UI.NO_TOP_RIGHT, color.background, 1.00);
    shell.apps.quit = ui.button(shell.apps.window, -1, 32, 8, 128, 32, "Quit", UI.CENTER|UI.BOLD, color.accent4, 1.00);
    ui.func(shell.apps.window, shell.apps.quit, function(){ qvm.cmd(qvm.ui, "quit"); });
    shell.apps.text = ui.button(shell.apps.window, -1, 32, 48, 576, 48, "Applications:", UI.LEFT|UI.BOLD, color.empty, 1.20);
    shell.apps.button = ui.button(shell.apps.window, -1, (shell.apps.w*0.5)-80, 512, 160, 28, "Menu", UI.CENTER|UI.BOLD|UI.NO_TOP_LEFT|UI.NO_TOP_RIGHT, color.background, 0.75);
    shell.apps.buttonH = api.element(shell.apps.window, shell.apps.button, "baseH");
    shell.apps.appList = ui.list(shell.apps.window, -1, 32, 48+48, 96, 96, 0.70, 6, 4, LMODE.APPS, 0);
    shell.apps.animStatus = 0;
    shell.apps.anim = { y:0 };
    shell.apps.anim.y = -1-(shell.apps.h-shell.apps.buttonH);
    api.window(shell.apps.window, "x", (shell.width*0.5) - (shell.apps.w*0.5));
}

function Shell_Draw() {
    Animation.update();
    
    api.window(shell.apps.window, "y", shell.apps.anim.y);
    
    if(!shell.onMap) {
        cgui.rect(qvm.ui, 0, 0, shell.width, shell.height, 0, color.background, 0);
        cgui.shader(qvm.ui, 0, 0, shell.width, shell.height, "menu/menu");
        cgui.coloredShader(qvm.ui, 0, 0, shell.width, shell.height, "menu/vignette", color.transparent192);
    }
}

function Shell_Key(key, windowID) {
    var nameID = api.window(windowID, "nameID");
    app.key(app.getByNameID(nameID), key, windowID);
}

function Shell_Callback(windowID, elementID, key) {
    var nameID = api.window(windowID, "nameID");
    app.call(app.getByNameID(nameID), windowID, elementID, key);
    if(key != KEY.MOUSE1 && key != KEY.MOUSE2 && key != KEY.ENTER && key != KEY.ESCAPE) return;
    
    ui.callFunc(windowID, elementID);
    
    if(windowID == shell.apps.window) {
        if(elementID == shell.apps.button) {
            if(shell.apps.animStatus == 0) {
                shell.apps.animStatus = 1;
                Animation.add(shell.apps.anim, { y: 0 }, 500);
            } else {
                shell.apps.animStatus = 0;
                Animation.add(shell.apps.anim, { y: -1-(shell.apps.h-shell.apps.buttonH) }, 500);
            }
        }
        if(elementID == shell.apps.appList) {
            Shell_Callback(shell.apps.window, shell.apps.button, KEY.MOUSE1);
            var selectedApp = api.element(shell.apps.window, shell.apps.appList, "value");
            app.launch(selectedApp);
        }
    }
}

function Shell_Update(windowID) {
    var nameID = api.window(windowID, "nameID");
    app.update(app.getByNameID(nameID), windowID);
}