var bulb = document.getElementById("bulb");
var button = document.getElementById("button");

button.addEventListener("click", function () {
    console.log('lights off thi');
    if (button.value == "off") {
        bulb.src = "./images/gardenlighton.jpg";
        button.src = "./images/offbutton.png";
        button.value = 'on';
    } else {
        console.log('lights on thi');
        bulb.src = "./images/gardenlightoff.jpg";
        button.src = "./images/onbutton.png";
        button.value = "off";
}
});


