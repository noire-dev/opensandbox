const js = {
    menuCheck: 1,
    menuInit: 2,
    menuDraw: 3,
    menuKey: 4,
    menuCallback: 5,
};

const vm = {
    entry: 0,
    uiReset: 1,
    drawString: 2, 
    drawRectangle: 3,
    drawShader: 4,
    createButton: 5,
    createCheckbox: 6,
    createSlider: 7,
    createAction: 8,
};

var uis = {
    items: [],
};
var cgui = {
    colors: [],
};
//var console = {}; //conflicting with JS console
var color = {};

qvm.entry = function(vmIndex, e, n, v, i1, i2, i3, i4) {
    var value = qvm.call(vm.entry, vmIndex, e, n, v, i1, i2, i3, i4);
    
    if(!cgui.colors[i1] && e === "cgui") cgui.colors[i1] = [];
    if(!uis.items[i1] && e === "uis.items[]") uis.items[i1] = [];
    
    if(e === "cgui") {
        if(n === "wideoffset") cgui.wideoffset = value;
        if(n === "colors[][]") cgui.colors[i1][i2] = value;
    }
    
    if(e === "uis") {
        if(n === "cursorx") uis.cursorx = value;
        if(n === "cursory") uis.cursory = value;
        if(n === "onmap") uis.onmap = value;
        if(n === "currentItem") uis.currentItem = value;
    }
    
    if(e === "uis.items[]") {
        if(n === "x") uis.items[i1].x = value;
        if(n === "y") uis.items[i1].y = value;
        if(n === "w") uis.items[i1].w = value;
        if(n === "h") uis.items[i1].h = value;
        if(n === "text") uis.items[i1].text = value;
        if(n === "style") uis.items[i1].style = value;
        if(n === "size") uis.items[i1].size = value;
        if(n === "colortext") uis.items[i1].colortext = value;
        if(n === "colorbg") uis.items[i1].colorbg = value;
        if(n === "corner") uis.items[i1].corner = value;
        if(n === "margin") uis.items[i1].margin = value;
        if(n === "action") uis.items[i1].action = value;
    }
    
    if(e === "console") {
        if(n === "lines[]") { console.lines = []; console.lines[i1] = value; }
        if(n === "linescount") console.linescount = value;
    }
}

cgui.createColor = function(vmIndex, id, r, g, b, a) {
    qvm.entry(vmIndex, "cgui", "colors[][]", r, id, 0);
    qvm.entry(vmIndex, "cgui", "colors[][]", g, id, 1);
    qvm.entry(vmIndex, "cgui", "colors[][]", b, id, 2);
    qvm.entry(vmIndex, "cgui", "colors[][]", a, id, 3);
    return id;
}

cgui.string = function(vmIndex, x, y, text, style, color, size) {
    qvm.call(vm.drawString, vmIndex, x, y, text, style, color, size);
}

cgui.rect = function(vmIndex, x, y, w, h, corner, color) {
    qvm.call(vm.drawRectangle, vmIndex, x, y, w, h, corner, color);
}

cgui.shader = function(vmIndex, x, y, w, h, shader) {
    qvm.call(vm.drawShader, vmIndex, x, y, w, h, shader);
}

function CGUI_InitColors(vmIndex) {
    color.black = cgui.createColor(vmIndex, 0, 0.00, 0.00, 0.00, 1.00);
    color.white = cgui.createColor(vmIndex, 1, 1.00, 1.00, 1.00, 1.00);
    color.red = cgui.createColor(vmIndex, 2, 1.00, 0.00, 0.00, 1.00);
    color.green = cgui.createColor(vmIndex, 3, 0.00, 1.00, 0.00, 1.00);
    color.blue = cgui.createColor(vmIndex, 4, 0.00, 0.00, 1.00, 1.00);
    
    color.disabled = cgui.createColor(vmIndex, 101, 0.10, 0.10, 0.20, 1.00);
    color.selected = cgui.createColor(vmIndex, 102, 1.00, 0.80, 0.00, 1.00);
    color.enabled = cgui.createColor(vmIndex, 103, 0.30, 0.90, 0.30, 1.00);
    color.tip = cgui.createColor(vmIndex, 104, 0.92, 0.72, 0.20, 1.00);
    color.tipshadow = cgui.createColor(vmIndex, 105, 0.30, 0.24, 0.06, 1.00);
    color.tiptext = cgui.createColor(vmIndex, 106, 0.20, 0.20, 0.20, 1.00);
    
    color.background = cgui.createColor(vmIndex, 150, 0.00, 0.00, 0.00, 0.40);
    color.buttonbg = cgui.createColor(vmIndex, 151, 0.85, 0.90, 1.00, 0.20);
    color.selectedbuttonbg = cgui.createColor(vmIndex, 152, 0.60, 0.75, 1.00, 0.40);
}
