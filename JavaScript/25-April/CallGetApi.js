function callAPI() {

    const url = 'https://httpbin.org/get';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        console.log('onload');
    }
    xhr.onerror = function () {
        console.log('error');
    }
    xhr.send();

}

callAPI();
console.log("DONE");


