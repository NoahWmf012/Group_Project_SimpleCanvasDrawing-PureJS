let userColor
$("#color-picker").on('change',function(e) {
    // userInputSize = e.target.value
    userColor = e.target.value
    console.log("colorPicked : " + userColor);
  });


class DrawingLine extends PaintFunction {
  constructor(contextReal, strokeSize) {
    super();
    // console.log(this.color)
    this.contextReal = contextReal;
    this.strokeSize = strokeSize;
    this.step = -1
    this.lineList = []
  }

  onMouseDown(coord) {
    console.log("line", coord)
    this.contextReal.strokeStyle = userColor;
    this.contextReal.lineJoin = "round";
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1], userInputSize);
    
  }
  onDragging(coord) {
    this.draw(coord[0], coord[1], );
  }
  onMouseMove() {}
  onMouseUp() {
    var can = document.getElementsByTagName("canvas");
    this.step ++
    this.lineList.push(can[0].toDataURL())
  }
  onMouseLeave() {}
  onMouseEnter() {}
  draw(x, y, strokeSize) {
    this.contextReal.lineTo(x, y);
    this.contextReal.moveTo(x, y);
    this.contextReal.closePath();
    this.contextReal.stroke();
    this.contextReal.lineWidth = strokeSize
  }
  undo() {
    let undoCanvas = document.getElementsByTagName("canvas");
    let ctx = undoCanvas[0].getContext("2d");
    //pop the list and then redraw
    this.step -=1
    this.lineList.pop()
    let canvasPic = new Image();
    canvasPic.src = this.lineList[this.step];
    canvasPic.onload = function () { 
      console.log('canvas', canvasPic)
      ctx.drawImage(canvasPic, 0, 0); 
    }
  }
}


//

// let restore_array = [];
// let index = -1;
// if (event.type != "mouseout") {
// restore_array.push(context.getImageData(0, 0, canvas.width, canvas.length)): 
// index += 1; }
// console.log(restore_array)

// function undo_last()
//   if(index <= 0) {
//     clear_canvas();
//   } else {
//     index -= 1;
//     restore_array.pop();
//     context.putImageData(restore_array[index], 0,0);
//   }7