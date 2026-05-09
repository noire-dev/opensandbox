const cgui = {};

const UI = {
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    BOLD: 4,
    ITALIC: 8,
    UNDERLINE: 16,
    STRIKETHROUGH: 32,
    MAGIC: 64,
    SHAKE: 128,
    LOCKSTYLE: 256,
    LOCKEFFECTS: 512,
    LOCKCOLOR: 1024,
    LOCKEMOJI: 2048,
    
    NODRAW: 4096,
    NO_TOP_LEFT: 8192,
    NO_TOP_RIGHT: 16384,
    NO_BOTTOM_LEFT: 32768,
    NO_BOTTOM_RIGHT: 65536,
    ACCENT: 131072,
    
    NOTITLE: 1,
    NOSCALE: 2,
    NOZORDER: 4,
    
    LOCKALL: 3840
};

const LIMIT = {
    WINDOWS: 32,
    ELEMENTS: 512,
    COLORS: 1024,
};

cgui.string = function(vmIndex, x, y, text, style, color, size) {
    qvm.call(vm.drawString, vmIndex, x, y, text, style, color, size);
}

cgui.rect = function(vmIndex, x, y, w, h, corner, color, style) {
    qvm.call(vm.drawRectangle, vmIndex, x, y, w, h, corner, color, style);
}

cgui.shader = function(vmIndex, x, y, w, h, shader) {
    qvm.call(vm.drawShader, vmIndex, x, y, w, h, shader);
}

cgui.coloredShader = function(vmIndex, x, y, w, h, shader, color) {
    qvm.call(vm.drawColoredShader, vmIndex, x, y, w, h, shader, color);
}