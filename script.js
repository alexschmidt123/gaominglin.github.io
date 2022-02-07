function loading() {
    alert("Loading weather report...");
}

var cookie = document.querySelector(".cookie");
function dismiss() {
    cookie.remove();
}

var temp = document.getElementsByClassName('temp');
function unit(element) {
    if (element.value == 2) {
        for (var i = 0; i < temp.length; i++) {
            temp[i].innerText = temp[i].innerText * 9 / 5 + 32;
        }
    }
    else {
        for (var i = 0; i < temp.length; i++) {
            temp[i].innerText = Math.ceil((temp[i].innerText - 32) * 5 / 9);
        }
    }

}
