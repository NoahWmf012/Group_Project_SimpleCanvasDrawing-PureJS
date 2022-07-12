const canvas = document.getElementById("canvas-real");
const img = canvas.toDataURL("image/png");

download_img = function (el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};
