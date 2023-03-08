var access_token = 'TzY0GM7IPtJPB9AKZIYd4YvsVEI9iS03';

if (getCookie('auth_token') === null) {
    fetch('https://misskey.codingneko.com/api/auth/session/generate', {
        method: 'POST',
        body: JSON.stringify({
            appSecret: access_token
        })
    }).then(response => {
        return JSON.parse(response);
    }).then(response => {
        console.log(response);
    });
} else {

}


function setCookie(name, value, exdays) {
    var d, expires;
    exdays = exdays || 1;
    d = new Date();
    d.setTime(d.getTime() + (exdays2460601000));
    expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(name) {
    var cookie, c;
    cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
        c = cookies[i].split('=');
        if (c[0] == name) {
            return c[1];
        }
    }
    return null;
}