const img_input = document.getElementById("image-input");
var imageSrc = document.getElementById("canvas-real");
// var ctx = canvas.getContext("2d");

var img_height, img_width;

img_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    imageSrc.style.backgroundImage = `url(${uploaded_image})`;
    //canvas.style.backgroundImage = `url(${uploaded_image})`;

    var img = new Image();

    img.onload = function () {
      img_height = img.height;
      img_width = img.width;
      // ctx.drawImage(img);
    };
    img.src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});

//redraw canvas size
$("#btn-redraw").on("click", function () {
  if (img_width == null || img_height == null) {
    alert("Please choose a photo first");
    return;
  }
  $("#canvas-real").prop("width", img_width);
  $("#canvas-real").prop("height", img_height);
  $("#canvas-draft").prop("width", img_width);
  $("#canvas-draft").prop("height", img_height);
});
