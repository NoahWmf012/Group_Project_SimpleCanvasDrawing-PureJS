let userColor;
$("#color-picker").on("change", function (e) {
  // userInputSize = e.target.value
  userColor = e.target.value;
  console.log("colorPicked : " + userColor);
});

class DrawingLine extends PaintFunction {
  constructor(contextReal, strokeSize) {
    super();
    this.contextReal = contextReal;
    this.strokeSize = strokeSize;
  }

  onMouseDown(coord) {
    console.log("line", coord);
    this.contextReal.strokeStyle = userColor;
    this.contextReal.lineJoin = "round";
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1], userInputSize);
  }
  onDragging(coord) {
    this.draw(coord[0], coord[1]);
  }
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  draw(x, y, strokeSize) {
    this.contextReal.lineTo(x, y);
    this.contextReal.moveTo(x, y);
    this.contextReal.closePath();
    this.contextReal.stroke();
    this.contextReal.lineWidth = strokeSize;
  }
}
