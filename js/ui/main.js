menu.currentpage = -1;
menu.currenttab = 100 + 0;

function Menu_Check() { return 1; }

function Menu_Init() {
    qvm.entry(qvm.ui, "uis", "onmap", null);
    qvm.entry(qvm.ui, "cgui", "wideoffset", null);
    
    CGUI_InitColors(qvm.ui);
    
    var x = -80 - cgui.wideoffset;
    menu.page.max = 0;
    menu.page.start = ui.button(menu.page.max++, x += 90, 8, 80, 16, "Game", UI.CENTER, 0.90, color.white, color.background, 3, 0, "map world");
    menu.page.settings = ui.button(menu.page.max++, x += 90, 8, 80, 16, "Settings", UI.CENTER, 0.90, color.white, color.background, 3, 0, "");
    menu.page.console = ui.button(menu.page.max++, x += 90, 8, 80, 16, "Console", UI.CENTER, 0.90, color.white, color.background, 3, 0, "");
    if(menu.currentpage != -1) qvm.entry(qvm.ui, "uis.items[]", "colorbg", color.selectedbuttonbg, menu.currentpage);

    menu.button.max = 5;
    x = 640 + cgui.wideoffset;    
    if(uis.onmap) menu.button.resume = ui.button(menu.button.max++, x -= 90, 8, 80, 16, "Close", UI.CENTER, 0.90, color.white, color.background, 3, 0, "menuback");
    if(uis.onmap) menu.button.disconnect = ui.button(menu.button.max++, x -= 90, 8, 80, 16, "Disconnect", UI.CENTER, 0.90, color.white, color.background, 3, 0, "disconnect");
    menu.button.quit = ui.button(menu.button.max++, x -= 90, 8, 80, 16, "Quit", UI.CENTER, 0.90, color.white, color.background, 3, 0, "quit");
    
    switch(menu.currentpage) {
        case menu.page.settings: Menu_Settings_Init(); break;
        case menu.page.console: Menu_Console_Init(); break;
    }
}

function Menu_Draw() {
    if(menu.currentpage != -1) cgui.rect(qvm.ui, 10 - cgui.wideoffset, 32, 620 + cgui.wideoffset * 2, 480 - 42, 4, color.background);
	
    switch(menu.currentpage) {
        case menu.page.settings: Menu_Settings_Draw(); break;
        case menu.page.console: Menu_Console_Draw(); break;
    }
}

function Menu_Key(key) {}

function Menu_Callback(id) {
    if(id >= 0 && id <= menu.page.max) {
        if(menu.currentpage == id) return ui.changePage(-1);
        ui.changePage(id);
    }
}
