const img_input = document.getElementById("image-input");

var img_height, img_width;

img_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;

    var img = new Image();

    img.onload = function () {
      img_height = img.height;
      img_width = img.width;
      drawImageActualSize();
      contextReal.drawImage(img, 0, 0);
    };
    img.src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});

//redraw canvas size
function drawImageActualSize() {
  if (img_width == null || img_height == null) {
    alert("Please choose a photo first");
    return;
  }
  $("#canvas-real").prop("width", img_width);
  $("#canvas-real").prop("height", img_height);
  $("#canvas-draft").prop("width", img_width);
  $("#canvas-draft").prop("height", img_height);
};
