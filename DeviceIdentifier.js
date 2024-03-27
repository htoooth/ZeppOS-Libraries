let info = hmSetting.getDeviceInfo();
let deviceName = info.deviceName;
let deviceClass = info.screenShape === 1 ? "circle" : (info.width / info.height) > 0.6 ? "square" : "band" ;
let isLowRamDevice = deviceClass === "band" ? true : false;
let deviceRoundRadius = 0;
let deviceChipset = "";

switch(info.deviceSource) {
  case 260:
  case 261:
  case 262:
  case 263:
  case 264:
  case 265:
    deviceName = "Mi Band 7";
    deviceClass = "miband";
    deviceChipset = "dialog";
    deviceRoundRadius = 96;
    isLowRamDevice = true;
    break;
  case 252:
  case 253:
  case 254:
    deviceName = "Band 7";
    deviceClass = "band";
    deviceChipset = "dialog";
    deviceRoundRadius = 25;
    isLowRamDevice = true;
    break;
  case 224:
  case 225:
    deviceName = "GTS 3";
    deviceClass = "square";
    deviceChipset = "nxp";
    deviceRoundRadius = 86;
    break;
  case 7995648:
  case 7995649:
    deviceName = "GTS 4";
    deviceClass = "square";
    deviceChipset = "nxp";
    deviceRoundRadius = 86;
    break;
  case 246:
  case 247:
    deviceName = "GTS 4 mini";
    deviceClass = "square";
    deviceChipset = "dialog";
    deviceRoundRadius = 80;
    break;
  case 250:
  case 251:
    deviceName = "GTR mini";
    deviceClass = "circle";
    deviceChipset = "mhs";
    deviceRoundRadius = 208;
    break;
  case 226:
  case 227:
    deviceName = "GTR 3";
    deviceClass = "circle";
    deviceChipset = "nxp";
    deviceRoundRadius = 227;
    break;
  case 229:
  case 230:
  case 6095106:
    deviceName = "GTR 3 pro";
    deviceClass = "circle";
    deviceChipset = "nxp";
    deviceRoundRadius = 240;
    break;
  case 7930113:
  case 7930112:
    deviceName = "GTR 4";
    deviceClass = "circle";
    deviceChipset = "nxp";
    deviceRoundRadius = 233;
    break;
  case 6553856:
  case 6553857:
    deviceName = "T-Rex Ultra";
    deviceClass = "circle";
    break;
  case 8126720:
  case 8126721:
    deviceName = "Cheetah Pro";
    deviceClass = "circle";
    break;
  case 8257793:
    deviceName = "Cheetah Square";
    deviceClass = "square";
    break;
  case 8192256:
  case 8192257:
    deviceClass = "circle";
    deviceName = "Cheetah";
    break;
  case 418:
  case 419:
    deviceName = "T-Rex 2";
    deviceClass = "circle";
    deviceChipset = "nxp";
    deviceRoundRadius = 227;
    break;
  case 414:
  case 415:
    deviceName = "Falcon";
    deviceClass = "circle";
    break;
  case 8454401:
    deviceName = "Bip 5";
    deviceClass = "square";
    break;
}

export { deviceName, deviceClass, isLowRamDevice, deviceRoundRadius, deviceChipset };
