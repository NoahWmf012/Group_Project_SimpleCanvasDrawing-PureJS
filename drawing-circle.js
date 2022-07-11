class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    console.log('mouse down', coord)
    this.contextReal.fillStyle = "red";
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    console.log('drag coord', coord)
    this.contextDraft.fillStyle = "red";
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.lineWidth = 5
    // this.contextDraft.fillRect(
    // this.origX,
    // this.origY,
    // coord[0] - this.origX,
    // coord[1] - this.origY
    // );
    this.contextDraft.arc(coord[0], coord[1], 100, 0, 2 * Math.PI);
    this.contextDraft.stroke()
    console.log('circle', this.contextDraft)
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.fillStyle = "cornflowerblue";
    this.contextReal.lineWidth = 5
    this.contextReal.arc(coord[0], coord[1], 100, 0, 2 * Math.PI);
    console.log('circle real', this.contextReal)
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
