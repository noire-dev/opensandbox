function NoireMapBrowser_Init(appID) {
    var id = ui.window(-1, app.list[appID].nameid, app.list[appID].name, app.list[appID].icon, 0, 80, 80, (128*5)+234+10, (128*4)+10, color.white, color.windowHeader, color.window);
    if(!ctx[id]) ctx[id] = {};
    
    ctx[id].self = id;
    ctx[id].close = ui.windowButton(id, -1, 0, "×", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].close, NoireMapBrowser_Exit);
    ctx[id].minimize = ui.windowButton(id, -1, 1, "-", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].minimize, NoireMapBrowser_Minimize);
    
    ctx[id].currentTab = -1;
    
    ctx[id].sidePanel = ui.button(id, -1, 0, 0, 224, api.window(id, "baseH"), "", UI.NO_TOP_LEFT|UI.NO_TOP_RIGHT|UI.NO_BOTTOM_RIGHT, color.windowSide, 1.00);
    api.element(id, ctx[id].sidePanel, "baseCorner", cvar.int("shell.window.corner"));
 
    ctx[id].tabs = [
        { name: "Sandbox", button: null },
        { name: "Free for All", button: null },
    ];

    for (var i = 0; i < ctx[id].tabs.length; i++) {
        ctx[id].tabs[i].button = ui.button(id, -1, 10, 10 + i * 29, 204, 24, ctx[id].tabs[i].name, UI.BOLD, color.windowItem, 0.65);
        api.element(id, ctx[id].tabs[i].button, "baseCorner", 4);
    }
    
    ctx[id].tabStartID = 50;
    ctx[id].tabEndID = 50;
    NoireMapBrowser_UpdateTab(id);
}

function NoireMapBrowser_UpdateTab(id) {
    ctx[id].mapList = ui.listGrid(id, ctx[id].tabEndID, 234, 0, 128, 128, 0.65, 5, 4, 0);
    ui.setMargin(id, ctx[id].mapList, 10, 20, 10, 40);
    ui.fillList(id, "maps/", ".bsp", "levelshots/", 0);
}

function NoireMapBrowser_Key(key, id) {
}

function NoireMapBrowser_Call(id, eid, key) {
    if(key != KEY.MOUSE1 && key != KEY.MOUSE2) return;
    if(eid == ctx[id].mapList) {
        qvm.cmd(qvm.ui, "map " + api.element(id, ctx[id].mapList, "field"));
    }
}

function NoireMapBrowser_Update(id) {
}

function NoireMapBrowser_Exit(id) {
    ui.closeWindow(ctx[id].self);
    delete ctx[id];
}

function NoireMapBrowser_Minimize(id) {
    isMinimized = api.window(id, "minimized");
    if(isMinimized) api.window(id, "minimized", 0);
    else api.window(id, "minimized", 1);
}

app.register("noiredev.mapbrowser", "Maps", NoireMapBrowser_Init, NoireMapBrowser_Key, NoireMapBrowser_Call, NoireMapBrowser_Update);