var bulb = document.getElementById("bulb");
var button = document.getElementById("button");
button.value = "off";
button.addEventListener("click", function () {
    console.log('lights off thi');
    if (button.value == "on") {
        bulb.src = "./images/gardenlighton.JPG";
        button.src = "./images/offbutton.png";
        button.value = 'off';
    } else {
        console.log('lights on thi');
        bulb.src = "./images/gardenlightoff.JPG";
        button.src = "./images/onbutton.png";
        button.value = "on";
}
});


