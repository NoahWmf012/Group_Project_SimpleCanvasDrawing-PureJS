const img_input = document.getElementById("image-input");
var img_height, img_width;

img_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    var imageSrc = document.getElementById("canvas-real");
    imageSrc.style.backgroundImage = `url(${uploaded_image})`;

    var img = new Image();

    img.onload = function () {
      img_height = img.height;
      img_width = img.width;
    };
    img.src = uploaded_image;
  });
  $("#canvas-real").prop("width", img_width);
  $("#canvas-real").prop("height", img_height);
  $("#canvas-draft").prop("width", img_width);
  $("#canvas-draft").prop("height", img_height);
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
