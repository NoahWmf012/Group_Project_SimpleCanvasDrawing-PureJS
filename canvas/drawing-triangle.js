class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
      console.log("mouse down", coord);
      this.contextReal.fillStyle = "red";
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
      console.log("drag coord", coord);
      this.contextDraft.fillStyle = "red";
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.lineWidth = 5;
  
      this.deltaX = this.origX - coord[0];
      this.deltaY = this.origY - coord[1];
      this.radius = Math.sqrt(
        this.deltaX * this.deltaX + this.deltaY * this.deltaY
      );
  
      this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
      this.contextDraft.stroke();
      console.log("circle", this.contextDraft);
    }
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.fillStyle = "cornflowerblue";
      this.contextReal.lineWidth = 5;
      this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
      this.contextReal.stroke();
      this.contextReal.fill();
      console.log("circle real", this.contextReal);
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
   