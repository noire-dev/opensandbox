JSCall = function(func_id) {
    var args = Array.prototype.slice.call(arguments, 1);
    switch(func_id) {
        case js.shellInit: return Shell_Init();
        case js.shellDraw: return Shell_Draw();
        case js.shellKey: return Shell_Key(args[0], args[1]);
        case js.shellCallback: return Shell_Callback(args[0], args[1], args[2]);
        case js.shellUpdate: return Shell_Update(args[0]);
        case js.getApp: return app.get(args[0]);
        case js.getAppName: return app.getName(args[0]);
        case js.getAppIcon: return app.getIcon(args[0]);
        case js.launchApp: return app.launch(app.getByNameID(args[0]));
    }
};
