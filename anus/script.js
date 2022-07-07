chrome.serial.getDevices((devices) => {
    devices.forEach((device) => {
        console.log(device);
    });
});