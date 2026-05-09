function ExampleApp_Init(appID) {
    var id = ui.window(-1, app.list[appID].nameid, app.list[appID].name, app.list[appID].icon, 0, 80, 80, 640, 480, color.white, color.windowHeader, color.window);
    if(!ctx[id]) ctx[id] = {};
    
    ctx[id].self = id;
    ctx[id].close = ui.windowButton(id, -1, 0, "×", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].close, ExampleApp_Exit);
    ctx[id].minimize = ui.windowButton(id, -1, 1, "-", UI.BOLD, color.windowButton, 1.00);
    ui.func(id, ctx[id].minimize, ExampleApp_Minimize);
}

function ExampleApp_Key(key, id) {
}

function ExampleApp_Call(id, eid, key) {
}

function ExampleApp_Update(id) {
}

function ExampleApp_Exit(id) {
    ui.closeWindow(ctx[id].self);
    delete ctx[id];
}

function ExampleApp_Minimize(id) {
    isMinimized = api.window(id, "minimized");
    if(isMinimized) api.window(id, "minimized", 0);
    else api.window(id, "minimized", 1);
}

app.register("noiredev.exampleapp", "Example App", ExampleApp_Init, ExampleApp_Key, ExampleApp_Call, ExampleApp_Update);