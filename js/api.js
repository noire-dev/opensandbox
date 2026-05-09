const api = {};
const apiFields = {};
const apiField = -1;

apiField = -1;
apiFields.cgui = {
    "whiteShader": apiField += 1,
    "corner": apiField += 1,
    "scale": apiField += 1,
    "wideoffset": apiField += 1,
    "colors": apiField += 1, // [colorID][colorComponent]
    "binds": apiField += 1, // [bindID]
};

apiField = -1;
apiFields.glconfig = {
    "width": apiField += 1,
    "height": apiField += 1,
    "isFullscreen": apiField += 1,
};

apiField = -1;
apiFields.shell = {
    "cursorX": apiField += 1,
    "cursorY": apiField += 1,
    "cursorIsDragging": apiField += 1,
    "debug": apiField += 1,
    "scale": apiField += 1,
    "corner": apiField += 1,
    "onMap": apiField += 1,
    "appCount": apiField += 1,
    "focusedWindow": apiField += 1,
    "activeWindow": apiField += 1,
    "zOrder": apiField += 1, // [orderID]
};

apiField = -1;
apiFields.window = {
    "created": apiField += 1,
    "minimized": apiField += 1,
    "id": apiField += 1,
    "nameID": apiField += 1,
    "name": apiField += 1,
    "icon": apiField += 1,
    "style": apiField += 1,
    "baseW": apiField += 1,
    "baseH": apiField += 1,
    "x": apiField += 1,
    "y": apiField += 1,
    "w": apiField += 1,
    "h": apiField += 1,
    "colorText": apiField += 1,
    "colorTitle": apiField += 1,
    "colorBackground": apiField += 1,
    "scaleFactor": apiField += 1,
    "focusedElement": apiField += 1,
    "keyCapture": apiField += 1,
};

apiField = -1;
apiFields.element = {
    "parentWindow": apiField += 1,
    "type": apiField += 1,
    "id": apiField += 1,
    "baseX": apiField += 1,
    "baseY": apiField += 1,
    "baseW": apiField += 1,
    "baseH": apiField += 1,
    "x": apiField += 1,
    "y": apiField += 1,
    "w": apiField += 1,
    "h": apiField += 1,
    "text": apiField += 1,
    "style": apiField += 1,
    "hoverStyle": apiField += 1,
    "baseScale": apiField += 1,
    "scale": apiField += 1,
    "colorText": apiField += 1,
    "colorBackground": apiField += 1,
    "baseCorner": apiField += 1,
    "corner": apiField += 1,
    "baseMargin": apiField += 1,
    "margin": apiField += 1,
    "cvar": apiField += 1,
    "value": apiField += 1,
    "valueMod": apiField += 1,
    "min": apiField += 1,
    "max": apiField += 1,
    "mode": apiField += 1,
    "bind": apiField += 1,
    "options": apiField += 1, // [optionID]
    "optionsCount": apiField += 1,
    "field": apiField += 1,
    "fieldPosition": apiField += 1, 
    "itemW": apiField += 1,
    "itemH": apiField += 1,
    "col": apiField += 1,
    "row": apiField += 1,
    "listID": apiField += 1,
};

apiField = -1;
apiFields.console = {
    "lines": apiField += 1, // [lineID]
    "linesCount": apiField += 1,
};

api.cgui = function(vmIndex, fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.cgui[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.cgui: invalid field '" + fieldName + "'");
        return false;
    }
    return qvm.call(vm.apiCGUI, vmIndex, fieldID, newValue, i1, i2, i3, i4);
}

api.glconfig = function(vmIndex, fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.glconfig[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.glconfig: invalid field '" + fieldName + "'");
        return false;
    }
    return qvm.call(vm.apiGLConfig, vmIndex, fieldID, newValue, i1, i2, i3, i4);
}

api.shell = function(fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.shell[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.shell: invalid field '" + fieldName + "'");
        return false;
    }
    return qvm.call(vm.apiShell, qvm.ui, fieldID, newValue, i1, i2, i3, i4);
}

api.window = function(windowID, fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.window[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.window: invalid field '" + fieldName + "'");
        return false;
    }
    if(fieldName === "name") newValue = translation.get(value);
    return qvm.call(vm.apiWindow, qvm.ui, windowID, fieldID, newValue, i1, i2, i3, i4);
}

api.element = function(windowID, elementID, fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.element[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.element: invalid field '" + fieldName + "'");
        return false;
    }
    if(fieldName === "text") newValue = translation.get(value);
    if(fieldName === "options") newValue = translation.get(value);
    return qvm.call(vm.apiElement, qvm.ui, windowID, elementID, fieldID, newValue, i1, i2, i3, i4);
}

api.console = function(fieldName, value, i1, i2, i3, i4) {
    var fieldID = apiFields.console[fieldName];
    var newValue = value;
    if (fieldID === undefined) {
        console.log("#ff5api.console: invalid field '" + fieldName + "'");
        return false;
    }
    return qvm.call(vm.apiConsole, qvm.ui, fieldID, newValue, i1, i2, i3, i4);
}