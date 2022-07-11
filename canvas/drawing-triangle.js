class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      console.log('hi triangle')
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
      
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.lineTo(this.origX * 2 - coord[0], coord[1]);
      this.contextDraft.closePath();
      
      this.contextDraft.stroke();
      console.log("triangle", this.contextDraft);
    }
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextReal.fillStyle = this.color;
      this.contextReal.lineWidth = 5;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();

      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.lineTo(this.origX * 2 - coord[0], coord[1]);
      this.contextReal.closePath();
      this.contextReal.stroke();
      this.contextReal.fill();
      console.log("circle real", this.contextReal);
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
   