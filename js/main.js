JSCall = function(func_id) {
    var args = Array.prototype.slice.call(arguments, 1);
    switch(func_id) {
        case js.menuCheck: return Menu_Check();
        case js.menuInit: return Menu_Init();
        case js.menuDraw: return Menu_Draw();
        case js.menuKey: return Menu_Key(args[0]);
        case js.menuCallback: return Menu_Callback(args[0]);
    }
};
