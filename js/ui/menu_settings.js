function Menu_Settings_Init() {
    var x = 15 - cgui.wideoffset;
    var y = 12 + 5;
    menu.tab.max = 100 + 0;
    menu.tab.general = ui.button(menu.tab.max++, x, y += 20, 120, 16, "General", UI.LEFT, 0.90, color.white, color.buttonbg, 3, 0, "");
    
    menu.thirdPerson = ui.checkbox(201, 20 + 120 - cgui.wideoffset, 17+20, 485 + cgui.wideoffset * 2, 16, "Third person", 0, 0.90, color.white, color.background, 3, 4, "cg_thirdPerson");
    menu.testInput = ui.action(202, 20 + 120 - cgui.wideoffset, 17+40, 485 + cgui.wideoffset * 2, 16, "Move forward", 0, 0.90, color.white, color.background, 3, 4, "+button 0");
}

function Menu_Settings_Draw() {}