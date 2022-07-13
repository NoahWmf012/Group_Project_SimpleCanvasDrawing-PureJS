


class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    console.log("mouse down", coord);
    console.log(activeColor())
    this.contextReal.fillStyle = activeColor();
    this.contextDraft.fillStyle = activeColor();
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.lineWidth = 5;

    this.deltaX = this.origX - coord[0];
    this.deltaY = this.origY - coord[1];
    this.radius = Math.sqrt(
      this.deltaX * this.deltaX + this.deltaY * this.deltaY
    );
    // this.contextDraft.fillRect(
    // this.origX,
    // this.origY,
    // coord[0] - this.origX,
    // coord[1] - this.origY
    // );
    this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.lineWidth = 5;
    this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
    this.contextReal.fill();
    console.log("circle real", this.contextReal);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
