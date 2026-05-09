function NoireConsole_Init(appID) {
    var id = ui.window(-1, app.list[appID].nameid, app.list[appID].name, app.list[appID].icon, 0, 80, 80, 800, 480, color.white, color.windowHeader, color.black);
    if(!ctx[id]) ctx[id] = {};
    
    ctx[id].self = id;
    ctx[id].close = ui.windowButton(id, -1, 0, "×", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].close, NoireConsole_Exit);
    ctx[id].minimize = ui.windowButton(id, -1, 1, "-", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].minimize, NoireConsole_Minimize);
    
    ctx[id].consoleY = 0;
    ctx[id].consoleLines = 24;
    ctx[id].consoleScroll = 0;
    ctx[id].line = [];
    for(var i = 0; i < ctx[id].consoleLines; i++) {
        if(i != ctx[id].consoleLines-1) {
            ctx[id].line[i] = ui.button(id, -1, 0, ctx[id].consoleY, 800, 20, i, 0, color.empty, 0.75);
            api.element(id, ctx[id].line[i], "hoverStyle", UI.BOLD);
            api.element(id, ctx[id].line[i], "baseMargin", 16);
        } else {
            ctx[id].field = ui.field(id, -1, 0, ctx[id].consoleY, 800, 20, "Enter command...", 0, color.empty, 0.75, "");
            api.element(id, ctx[id].field, "hoverStyle", UI.BOLD);
            api.element(id, ctx[id].field, "baseMargin", 16);
            api.element(id, ctx[id].field, "field", " ");
            api.element(id, ctx[id].field, "fieldPosition", 0);
            ui.func(id, ctx[id].field, NoireConsole_Command);
        }
        ctx[id].consoleY += 20;
    }
}

function NoireConsole_Command(id) {
    console.log(api.element(id, ctx[id].field, "field"));
    qvm.cmd(qvm.ui, api.element(id, ctx[id].field, "field"));
    api.element(id, ctx[id].field, "field", " ");
    api.element(id, ctx[id].field, "fieldPosition", 0);
}

function NoireConsole_Key(key, id) {
    if(key == KEY.MWHEELUP) ctx[id].consoleScroll += 1;
    if(key == KEY.MWHEELDOWN) ctx[id].consoleScroll -= 1;
}

function NoireConsole_Call(id, eid, key) {
    if(key == KEY.MOUSE1) {
        for(var i = 0; i < ctx[id].consoleLines-1; i++) {
            if(eid == ctx[id].line[i]) {
                api.element(id, ctx[id].field, "field", api.element(id, ctx[id].line[i], "text"));
                api.element(id, ctx[id].field, "fieldPosition", api.element(id, ctx[id].line[i], "text").length-1);
            }
        }
    }
}

function NoireConsole_Update(id) {
    var line = 0;
    var linesCount = api.console("linesCount");
    for(var i = linesCount-(ctx[id].consoleLines-1); i < linesCount; i++) {
		if(i <= 0) break;
		if(i-ctx[id].consoleScroll == -1) ctx[id].consoleScroll -= 1;
		if(ctx[id].consoleScroll < 0) ctx[id].consoleScroll = 0;
		var str = api.console("lines", null, i-ctx[id].consoleScroll);
		api.element(id, ctx[id].line[line], "text", str);
		line += 1;
    }
}

function NoireConsole_Exit(id) {
    ui.closeWindow(ctx[id].self);
    delete ctx[id];
}

function NoireConsole_Minimize(id) {
    isMinimized = api.window(id, "minimized");
    if(isMinimized) api.window(id, "minimized", 0);
    else api.window(id, "minimized", 1);
}

app.register("noiredev.console", "Console", NoireConsole_Init, NoireConsole_Key, NoireConsole_Call, NoireConsole_Update);