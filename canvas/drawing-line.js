class DrawingLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "cornflowerblue";
        this.origX = coord[0];
        this.origY = coord[1];
      }
      onDragging(coord, event) {
        this.contextDraft.fillStyle = "cornflowerblue";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.arc(
          this.origX,
          this.origY,
          radius,
          startAngle,
          endAngle
          
        );
      }
      onMouseMove() {}
      onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, 2* Math.PI);
        this.contextReal.fillRect(
          this.origX,
          this.origY,
          coord[0] - this.origX,
          coord[1] - this.origY
        );
      }
      onMouseLeave() {}
      onMouseEnter() {}
    }
