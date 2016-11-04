thing = function() {
    xhr = new XMLHttpRequest();
    xhr.open('POST', '/wat?a=1&b=2', false);
    xhr.send(null);
    return xhr;
}
