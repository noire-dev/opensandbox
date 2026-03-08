function Menu_Console_Init() {
    var x = 15 - cgui.wideoffset;
    var y = 12 + 5;
    menu.tab.max = 100 + 0;
    menu.tab.game = ui.button(menu.tab.max++, x, y += 20, 120, 16, "Game", UI.LEFT, 0.90, color.white, color.buttonbg, 3, 0, "");
    menu.tab.js = ui.button(menu.tab.max++, x, y += 20, 120, 16, "JavaScript", UI.LEFT, 0.90, color.white, color.buttonbg, 3, 0, "");

    menu.consolefield = ui.button(201, 20 + 120 - cgui.wideoffset, 480 - 15 - 16, 485 + cgui.wideoffset * 2, 16, "Console for text input...", UI.LEFT, 0.90, color.white, color.buttonbg, 3, 0, "console");
}

function Menu_Console_Draw() {
    qvm.entry(qvm.ui, "console", "linescount", null);
    var x = 20 + 120 - cgui.wideoffset;
    var y = 480 - 10 - 16;
    for(var i = console.linescount; i > console.linescount - 38; i--) {
		if(i <= 0) break;
		qvm.entry(qvm.ui, "console", "lines[]", null, i);
		cgui.string(qvm.ui, x, y -= 11, console.lines[i], 0, color.white, 1.00);
    }
}