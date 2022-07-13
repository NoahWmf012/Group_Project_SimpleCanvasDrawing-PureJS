// // let userInputSize = 6;
// let userColor
// $("#color-picker").on('change',function(e) {
//     // userInputSize = e.target.value
//     userColor = e.target.value
//     console.log("colorPicked : " + userColor);
//   });

class Spray extends PaintFunction {
  constructor(contextReal, strokeSize) {
    super();
    console.log(this.color)
    this.contextReal = contextReal;
    this.strokeSize = strokeSize;
    this.points = [];
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = userColor;
    this.contextReal.fillStyle = this.color;
    this.contextReal.lineJoin = "round";
    this.points.push({x: coord[0], y: coord[1]})
}
onDragging(coord, event) {
    // this.draw(coord[0], coord[1], );
    this.contextReal.strokeStyle = userColor;
    this.points.push({x: coord[0], y: coord[1]})
    // this.points.map((object) => {
        for (let i=0; i < this.points.length; i+= 7) {
        this.contextReal.beginPath()
        this.contextReal.arc(this.points[i].x, this.points[i].y, this.getRandomInt(2,10), 0, Math.PI * 2)
        this.contextReal.arc(this.points[i].x + this.getRandomInt(-30,30), this.points[i].y + this.getRandomInt(-30, 30), this.getRandomInt(2,5), 0, Math.PI * 2)
        this.contextReal.fill()
        this.contextReal.fillStyle = this.color;
        
        }
    // })
  }

  onMouseMove() {}
  onMouseUp() {
    this.points = [];
  }
  onMouseLeave() {}
  onMouseEnter() {}
//   draw(x, y, strokeSize) {
//     this.contextReal.lineTo(x, y);
//     this.contextReal.moveTo(x, y);
//     this.contextReal.closePath();
//     this.contextReal.stroke();
//     this.contextReal.lineWidth = strokeSize
//   }

 getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


//