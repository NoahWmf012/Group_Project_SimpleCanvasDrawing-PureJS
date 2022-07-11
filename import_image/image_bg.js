const img_input = document.getElementById("image-input");

img_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    var imageSrc = document.getElementById("canvas-real");
    imageSrc.style.backgroundImage = `url(${uploaded_image})`;

    var img = new Image();

    img.onload = function () {
      var height = img.height;
      var width = img.width;

      // code here to use the dimensions
      console.log("height : " + height);
      console.log("width : " + width);
    };
    img.src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});
