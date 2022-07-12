// var userInputSize = 6;

// $("#stroke-size").on('change',function(e) {
//   userInputSize = e.target.value
//   console.log(userInputSize)
// });

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var el = document.getElementById('canvas-real');
// var ctx = this.contextReal;

// ctx.lineJoin = ctx.lineCap = 'round';
// ctx.fillStyle = 'red';

// var isDrawing, points = [ ], radius = 15;


// class Spray extends PaintFunction {
//   constructor(contextReal, strokeSize) {
//     super();
//     console.log(this.color)
//     this.contextReal = contextReal;
//     this.strokeSize = strokeSize;
//   }

//   onMouseDown(coord, event) {
//     this.contextReal.strokeStyle = this.color;
//     this.contextReal.lineJoin = "round";
//     this.contextReal.beginPath();
//     this.contextReal.moveTo(coord[0], coord[1]);
//     this.draw(coord[0], coord[1], userInputSize);
//     this.contextReal.points.push({ 
//       x: e.clientX, 
//       y: e.clientY,
//       radius: getRandomInt(10, 30),
//       opacity: Math.random()
//     });
    
    
//   }

//   onDragging(coord, event) {
//     this.draw(coord[0], coord[1], );
//   }
//   onMouseMove() {
//     this.contextReal.points.push({ 
//       x: e.clientX, 
//       y: e.clientY,
//       radius: getRandomInt(10, 30),
//       opacity: Math.random()
//     });
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     for (var i = 0; i < points.length; i++) {
//       ctx.beginPath();
//       ctx.globalAlpha = points[i].opacity;
//       ctx.arc(
//         points[i].x, points[i].y, points[i].radius, 
//         false, Math.PI * 2, false);
//       ctx.fill();
//   }
// }
//   onMouseUp() {
//     isDrawing = false;
//     points.length = 0;
//   }
//   onMouseLeave() {}
//   onMouseEnter() {}
//   draw(x, y, strokeSize) {
//     this.contextReal.lineTo(x, y);
//     this.contextReal.moveTo(x, y);
//     this.contextReal.closePath();
//     this.contextReal.stroke();
//     this.contextReal.lineWidth = strokeSize
//   }
// }

  
//   // el.onmousedown = function(e) {
//   //   isDrawing = true;
//   //   points.push({ 
//   //     x: e.clientX, 
//   //     y: e.clientY,
//   //     radius: getRandomInt(10, 30),
//   //     opacity: Math.random()
//   //   });
//   // };
//   // el.onmousemove = function(e) {
//   //   if (!isDrawing) return;
    
//   //   points.push({ 
//   //     x: e.clientX, 
//   //     y: e.clientY,
//   //     radius: getRandomInt(5, 20),
//   //     opacity: Math.random()
//   //   });
    
//   //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   //   for (var i = 0; i < points.length; i++) {
//   //     ctx.beginPath();
//   //     ctx.globalAlpha = points[i].opacity;
//   //     ctx.arc(
//   //       points[i].x, points[i].y, points[i].radius, 
//   //       false, Math.PI * 2, false);
//   //     ctx.fill();
//   //   }
//   // };
//   // el.onmouseup = function() {

//   // };