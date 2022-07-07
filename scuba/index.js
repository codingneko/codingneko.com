M.AutoInit();

var sac = document.getElementById('sac');
var time = document.getElementById('time');
var volume = document.getElementById('volume');
var pressure = document.getElementById('pressure');
var depth = document.getElementById('depth');

[sac, time, volume, pressure, depth].forEach((i) => {
    i.addEventListener('change', (e) => calculateTime());
});

function calculateTime() {
    let outsidePressure = depth.value / 10;
    if (
        sac.value != 0 &&
        time.value != 0 &&
        volume.value != 0 &&
        pressure.value != 0 &&
        depth.value != 0
    ) {
        M.toast({
            html: 'Please leave exactly one field empty!',
            classes: 'red darken-2',
        });
    } else if (
        sac.value == 0 &&
        time.value != 0 &&
        volume.value != 0 &&
        pressure.value != 0 &&
        depth.value != 0
    ) {
        sac.value =
            (volume.value * pressure.value) / outsidePressure / time.value;
    } else if (
        sac.value != 0 &&
        time.value == 0 &&
        volume.value != 0 &&
        pressure.value != 0 &&
        depth.value != 0
    ) {
        time.value =
            (pressure.value * volume.value) / (sac.value * outsidePressure);
    } else if (
        sac.value != 0 &&
        time.value != 0 &&
        volume.value == 0 &&
        pressure.value != 0 &&
        depth.value != 0
    ) {
        volume.value =
            (sac.value * outsidePressure * time.value) / pressure.value;
    } else if (
        sac.value != 0 &&
        time.value != 0 &&
        volume.value != 0 &&
        pressure.value == 0 &&
        depth.value != 0
    ) {
        pressure.value =
            (sac.value * outsidePressure * time.value) / volume.value;
    } else if (
        sac.value != 0 &&
        time.value != 0 &&
        volume.value != 0 &&
        pressure.value != 0 &&
        depth.value == 0
    ) {
        depth.value =
            ((pressure.value * volume.value) / (sac.value * time.value)) * 10;
    } else {
        M.toast({
            html: 'Please leave exactly one field empty!',
            classes: 'red darken-2',
        });
    }
}
