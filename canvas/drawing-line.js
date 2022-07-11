let userInputSize = 6;

$("#stroke-size").on("change", function (e) {
  userInputSize = e.target.value;
  console.log(userInputSize);
});

class DrawingLine extends PaintFunction {
  constructor(contextReal, strokeSize) {
    super();
    console.log(this.color);
    this.contextReal = contextReal;
    this.strokeSize = strokeSize;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = this.color;
    this.contextReal.lineJoin = "round";
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1], userInputSize);
  }
  onDragging(coord, event) {
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
