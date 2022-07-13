let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
var can = document.getElementsByTagName("canvas");
let currentFunction;
let dragging = false;
let colorPicked;
let userInputSize = 6;

//save the current Img for undo
let currentStep = -1;
let currentImg = [];

$("#stroke-size").on("change", function (e) {
  userInputSize = e.target.value;
});

$("#color-picker").on("change", function (e) {
  // userInputSize = e.target.value
  colorPicked = e.target.value;
  console.log("colorPicked : " + colorPicked);
});

$("#clear").click(function () {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
});

$("#btn_undo").click(function () {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  currentStep -= 1;
  currentImg.pop();
  let canvasPic = new Image();
  canvasPic.src = currentImg[currentStep];
  canvasPic.onload = function () {
    console.log("canvas", canvasPic);
    contextReal.drawImage(canvasPic, 0, 0);
  };
});

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  if (currentFunction) {
    currentFunction.onMouseMove([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (currentFunction) {
    currentFunction.onMouseUp([mouseX, mouseY], e);
  }

  //for undo function
  currentStep++;
  currentImg.push(can[0].toDataURL());
  console.log("currentStep : " + currentStep);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (currentFunction) {
    currentFunction.onMouseLeave([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (currentFunction) {
    currentFunction.onMouseEnter([mouseX, mouseY], e);
  }
});

function activeColor() {
  return $("#color-picker").val()
}

class PaintFunction {
  constructor() {
    this.color = colorPicked;
  }
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
