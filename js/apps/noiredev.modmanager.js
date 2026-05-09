function NoireModManager_Init(appID) {
    var id = ui.window(-1, app.list[appID].nameid, app.list[appID].name, app.list[appID].icon, 0, 80, 80, 800, 500, color.white, color.windowHeader, color.window);
    if(!ctx[id]) ctx[id] = {};
    
    ctx[id].self = id;
    ctx[id].close = ui.windowButton(id, -1, 0, "×", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].close, NoireModManager_Exit);
    ctx[id].minimize = ui.windowButton(id, -1, 1, "-", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].minimize, NoireModManager_Minimize);
    
    ctx[id].currentTab = -1;
    
    ctx[id].sidePanel = ui.button(id, -1, 0, 0, 224, api.window(id, "baseH"), "", UI.NO_TOP_LEFT|UI.NO_TOP_RIGHT|UI.NO_BOTTOM_RIGHT, color.windowSide, 1.00);
    api.element(id, ctx[id].sidePanel, "baseCorner", cvar.int("shell.window.corner"));
 
    ctx[id].tabs = [];

    for (var i = 0; i < addon.list.length; i++) {
        if(!ctx[id].tabs[i]) ctx[id].tabs[i] = {};
        ctx[id].tabs[i].button = ui.button(id, -1, 10, 10 + i * 29, 204, 24, addon.list[i].name, UI.BOLD, color.windowItem, 0.65);
        api.element(id, ctx[id].tabs[i].button, "field", addon.list[i].nameid);
        api.element(id, ctx[id].tabs[i].button, "baseCorner", 4);
        api.element(id, ctx[id].tabs[i].button, "hoverStyle", UI.ACCENT);
    }
    
    ctx[id].tabStartID = 50;
    ctx[id].tabEndID = 50;
    ctx[id].pageX = 224;
    ctx[id].pageW = 800-224;
    
    for (var j = 0; j < ctx[id].tabs.length; j++) {
        if(!cvar.int("addon.enabled." + addon.getByNameID(api.element(id, ctx[id].tabs[j].button, "field")))) api.element(id, ctx[id].tabs[j].button, "style", UI.BOLD|UI.STRIKETHROUGH);
    }
}

function NoireModManager_Key(key, id) {
}

function NoireModManager_Call(id, eid, key) {
    if(key != KEY.MOUSE1 && key != KEY.MOUSE2) return;
    for (var i = 0; i < ctx[id].tabs.length; i++) {
        if (eid == ctx[id].tabs[i].button) {
            for (var j = 0; j < ctx[id].tabs.length; j++) {
                api.element(id, ctx[id].tabs[j].button, "colorBackground", color.windowItem);
                api.element(id, ctx[id].tabs[j].button, "style", UI.BOLD);
                if(!cvar.int("addon.enabled." + addon.getByNameID(api.element(id, ctx[id].tabs[j].button, "field")))) api.element(id, ctx[id].tabs[j].button, "style", UI.BOLD|UI.STRIKETHROUGH);
            }
            api.element(id, ctx[id].tabs[i].button, "colorBackground", color.enabled);
            api.element(id, ctx[id].tabs[i].button, "hoverStyle", 0);
                        
            ctx[id].currentTab = i;
            ctx[id].elementHeight = 32;
            ctx[id].elementSpace = 5;
            ctx[id].elementFontScale = 0.80;
            
            ui.clearWindow(id, ctx[id].tabStartID, ctx[id].tabEndID);
            addon.list[addon.getByNameID(api.element(id, ctx[id].tabs[i].button, "field"))].configfunc(id, ctx[id].pageX, ctx[id].pageW, addon.getByNameID(api.element(id, ctx[id].tabs[i].button, "field")));
        }
    }
    
    for(var i = ctx[id].tabStartID; i <= ctx[id].tabEndID; i++) {
        api.element(id, i, "baseCorner", 4);
        api.element(id, i, "hoverStyle", UI.ACCENT);
    }
    
    if(eid == ctx[id].enabled) {
        addon.buildlist();
        NoireModManager_Call(id, ctx[id].tabs[ctx[id].currentTab].button, KEY.MOUSE1);
    }
}

function NoireModManager_Update(id) {
}

function NoireModManager_Exit(id) {
    ui.closeWindow(ctx[id].self);
    delete ctx[id];
}

function NoireModManager_Minimize(id) {
    isMinimized = api.window(id, "minimized");
    if(isMinimized) api.window(id, "minimized", 0);
    else api.window(id, "minimized", 1);
}

app.register("noiredev.modmanager", "Mod Manager", NoireModManager_Init, NoireModManager_Key, NoireModManager_Call, NoireModManager_Update);