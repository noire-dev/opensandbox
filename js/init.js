const jsCount = -1;
const js = {
    shellInit: jsCount += 1,
    shellDraw: jsCount += 1,
    shellKey: jsCount += 1,
    shellCallback: jsCount += 1,
    shellUpdate: jsCount += 1,
    getApp: jsCount += 1,
    getAppName: jsCount += 1,
    getAppIcon: jsCount += 1,
    launchApp: jsCount += 1,
};

const vmCount = -1;
const vm = {
    // General
    cmd: vmCount += 1,
    
    // cgame.qvm + ui.qvm
    apiCGUI: vmCount += 1,
    apiGLConfig: vmCount += 1,
    drawString: vmCount += 1, 
    drawRectangle: vmCount += 1,
    drawShader: vmCount += 1,
    drawColoredShader: vmCount += 1,
    
    //ui.qvm
    apiShell: vmCount += 1,
    apiWindow: vmCount += 1,
    apiElement: vmCount += 1,
    apiConsole: vmCount += 1,
    closeWindow: vmCount += 1,
    clearWindow: vmCount += 1,
    getFreeElement: vmCount += 1,
    createWindow: vmCount += 1,
    createWindowButton: vmCount += 1,
    createPicture: vmCount += 1,
    createButton: vmCount += 1,
    createCheckbox: vmCount += 1,
    createSlider: vmCount += 1,
    createAction: vmCount += 1,
    createSpin: vmCount += 1,
    createField: vmCount += 1,
    createList: vmCount += 1,
    createListFiles: vmCount += 1,
    fillListFiles: vmCount += 1,
    setMargin: vmCount += 1,
};

const limits = {
    maxAddons: 4096,
};

qvm.cmd = function(vmIndex, command) {
    qvm.call(vm.cmd, vmIndex, command);
}

openjs.file("js/cvar");
openjs.file("js/translation");
openjs.file("js/api");
openjs.file("js/color");
openjs.file("js/cgui");
openjs.file("js/ui");
openjs.file("js/utils");
openjs.file("js/addons");
openjs.file("js/app");
openjs.file("js/shell");