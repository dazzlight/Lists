function onPageLoaded() {
  console.log("Page is loaded");
}

function changeImage() {
  document.getElementById("changeThatImage").src =
    "https://www.generasia.com/w/images/thumb/6/60/ATEEZ_-_TREASURE_EP_FIN_All_To_Action_digital.jpg/200px-ATEEZ_-_TREASURE_EP_FIN_All_To_Action_digital.jpg";
}

function overMouse() {
  const onDiv = document.getElementById("talkingDiv");
  onDiv.innerHTML = "How are you today? :)";
  onDiv.style.borderColor = "yellow";
}

function outMouse() {
  const outDiv = document.getElementById("talkingDiv");
  outDiv.innerHTML = "GoodBye! :(";
  outDiv.style.borderColor = "blue";
}

function keyDown() {
  console.log("Key Down");
}

function keyUp() {
  console.log("Key Up");
}

window.onPageLoaded = onPageLoaded;
window.changeImage = changeImage;
window.overMouse = overMouse;
window.outMouse = outMouse;
window.keyDown = keyDown;
window.keyUp = keyUp;
