const UI = {
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    FORMATMASK: 7,
    DROPSHADOW: 16,
    PULSE: 32
};

const EMODE = {
    NONE: 0,
    INT: 1,
    FLOAT: 2,
};

var ui = {};
var menu = {};
menu.page = {};
menu.button = {};
menu.tab = {};

ui.button = function(id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action) {
    return qvm.call(vm.createButton, qvm.ui, id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action);
}

ui.checkbox = function(id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action) {
    return qvm.call(vm.createCheckbox, qvm.ui, id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action);
}

ui.slider = function(id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action, min, max, mode) {
    return qvm.call(vm.createSlider, qvm.ui, id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action, min, max, mode);
}

ui.action = function(id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action) {
    return qvm.call(vm.createAction, qvm.ui, id, x, y, w, h, text, style, size, color, colorbg, corner, margin, action);
}

ui.changePage = function(id) {
    menu.currentpage = id;
    qvm.call(vm.uiReset, qvm.ui);
    Menu_Init();
}

openjs.folder("js/ui", "ui");
