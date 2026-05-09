var color = {};

color.create = function(vmIndex, id, r, g, b, a) {
    var normalizedR = r / 255.0;
    var normalizedG = g / 255.0;
    var normalizedB = b / 255.0;
    var normalizedA = a / 255.0;

    api.cgui(vmIndex, "colors", normalizedR, id, 0);
    api.cgui(vmIndex, "colors", normalizedG, id, 1);
    api.cgui(vmIndex, "colors", normalizedB, id, 2);
    api.cgui(vmIndex, "colors", normalizedA, id, 3);
    return id;
}

color.copy = function(vmIndex, destID, sourceID) {
    for (var i = 0; i < 4; i++) {
        var val = api.cgui(vmIndex, "colors", null, sourceID, i);
        api.cgui(vmIndex, "colors", val, destID, i);
    }
    return destID;
}

color.init = function(vmIndex) {
    // Colors
    color.blue1 = color.create(vmIndex, 100, 153, 193, 241, 255);
    color.blue2 = color.create(vmIndex, 101, 98, 160, 234, 255);
    color.blue3 = color.create(vmIndex, 102, 53, 132, 228, 255);
    color.blue4 = color.create(vmIndex, 103, 28, 113, 216, 255);
    color.blue5 = color.create(vmIndex, 104, 26, 95, 180, 255);
    color.green1 = color.create(vmIndex, 105, 143, 240, 164, 255);
    color.green2 = color.create(vmIndex, 106, 87, 227, 137, 255);
    color.green3 = color.create(vmIndex, 107, 51, 209, 122, 255);
    color.green4 = color.create(vmIndex, 108, 46, 194, 126, 255);
    color.green5 = color.create(vmIndex, 109, 38, 162, 105, 255);
    color.yellow1 = color.create(vmIndex, 110, 249, 240, 107, 255);
    color.yellow2 = color.create(vmIndex, 111, 248, 228, 92, 255);
    color.yellow3 = color.create(vmIndex, 112, 246, 211, 45, 255);
    color.yellow4 = color.create(vmIndex, 113, 245, 194, 17, 255);
    color.yellow5 = color.create(vmIndex, 114, 229, 165, 10, 255);
    color.orange1 = color.create(vmIndex, 115, 255, 190, 111, 255);
    color.orange2 = color.create(vmIndex, 116, 255, 163, 72, 255);
    color.orange3 = color.create(vmIndex, 117, 255, 120, 0, 255);
    color.orange4 = color.create(vmIndex, 118, 230, 97, 0, 255);
    color.orange5 = color.create(vmIndex, 119, 198, 70, 0, 255);
    color.red1 = color.create(vmIndex, 120, 246, 97, 81, 255);
    color.red2 = color.create(vmIndex, 121, 237, 51, 59, 255);
    color.red3 = color.create(vmIndex, 122, 224, 27, 36, 255);
    color.red4 = color.create(vmIndex, 123, 192, 28, 40, 255);
    color.red5 = color.create(vmIndex, 124, 165, 29, 45, 255);
    color.purple1 = color.create(vmIndex, 125, 220, 138, 221, 255);
    color.purple2 = color.create(vmIndex, 126, 192, 97, 203, 255);
    color.purple3 = color.create(vmIndex, 127, 145, 65, 172, 255);
    color.purple4 = color.create(vmIndex, 128, 129, 61, 156, 255);
    color.purple5 = color.create(vmIndex, 129, 97, 53, 131, 255);
    color.brown1 = color.create(vmIndex, 130, 205, 171, 143, 255);
    color.brown2 = color.create(vmIndex, 131, 181, 131, 90, 255);
    color.brown3 = color.create(vmIndex, 132, 152, 106, 68, 255);
    color.brown4 = color.create(vmIndex, 133, 134, 94, 60, 255);
    color.brown5 = color.create(vmIndex, 134, 99, 69, 44, 255);
    color.light1 = color.create(vmIndex, 135, 255, 255, 255, 255);
    color.light2 = color.create(vmIndex, 136, 246, 245, 244, 255);
    color.light3 = color.create(vmIndex, 137, 222, 221, 218, 255);
    color.light4 = color.create(vmIndex, 138, 192, 191, 188, 255);
    color.light5 = color.create(vmIndex, 139, 154, 153, 150, 255);
    color.dark1 = color.create(vmIndex, 140, 119, 118, 123, 255);
    color.dark2 = color.create(vmIndex, 141, 94, 92, 100, 255);
    color.dark3 = color.create(vmIndex, 142, 61, 56, 70, 255);
    color.dark4 = color.create(vmIndex, 143, 36, 31, 49, 255);
    color.dark5 = color.create(vmIndex, 144, 0, 0, 0, 255);

    // General colors
    color.empty = color.create(vmIndex, 0, 0, 0, 0, 0);
    color.black = color.create(vmIndex, 1, 0, 0, 0, 255);
    color.white = color.create(vmIndex, 2, 255, 255, 255, 255);
    color.grey = color.create(vmIndex, 3, 150, 150, 150, 255);
    color.red = color.create(vmIndex, 4, 255, 0, 0, 255);
    color.green = color.create(vmIndex, 5, 0, 255, 0, 255);
    color.blue = color.create(vmIndex, 6, 0, 0, 255, 255);
    color.disabled = color.create(vmIndex, 7, 75, 75, 75, 255);
    color.enabled = color.copy(vmIndex, 8, color.empty);
    color.contextMenu = color.create(vmIndex, 9, 50, 50, 50, 200);
    color.windowButton = color.create(vmIndex, 10, 70, 70, 75, 192);
    color.debug1 = color.copy(vmIndex, 11, color.red);
    color.debug2 = color.copy(vmIndex, 12, color.green);
    
    // Accent colors
    color.enabled = color.copy(vmIndex, 8, color.blue3);
    color.accent1 = color.copy(vmIndex, 195, color.blue1);
    color.accent2 = color.copy(vmIndex, 196, color.blue2);
    color.accent3 = color.copy(vmIndex, 197, color.blue3);
    color.accent4 = color.copy(vmIndex, 198, color.blue4);
    color.accent5 = color.copy(vmIndex, 199, color.blue5);
    
    // Shell colors
    color.background = color.create(vmIndex, 200, 25, 25, 32, 180);
    color.window = color.create(vmIndex, 201, 34, 34, 38, 255);
    color.windowHeader = color.create(vmIndex, 202, 46, 46, 50, 255);
    color.windowSide = color.create(vmIndex, 203, 40, 40, 45, 255);
    color.windowItem = color.create(vmIndex, 204, 5, 5, 7, 64);
    color.transparent64 = color.create(vmIndex, 205, 255, 255, 255, 64);
    color.transparent128 = color.create(vmIndex, 206, 255, 255, 255, 128);
    color.transparent192 = color.create(vmIndex, 207, 255, 255, 255, 192);
};