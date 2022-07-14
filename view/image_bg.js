const img_input = document.getElementById("image-input");
const dragArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");
const btn_input = document.querySelector(".btn-browse");

var section_1 = document.querySelector(".section-1");
var section_2 = document.querySelector(".section-2");

let file;

var img_height, img_width;

//browse button
btn_input.onclick = () => {
  img_input.click();
};

//Event on dragArea
dragArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dragText.textContent = "Release to Start";
  dragArea.classList.add("active");
});

dragArea.addEventListener("dragleave", () => {
  dragText.textContent = "Drag & Drop";
  dragArea.classList.remove("active");
});

dragArea.addEventListener("drop", (e) => {
  e.preventDefault();

  file = e.dataTransfer.files[0];

  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(file.type)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      const fileURL = fileReader.result;

      var img = new Image();

      //section_1 dissapear & section_2 appear
      //animation
      section_1.classList.add("animate__animated", "animate__backOutUp");
      setTimeout(function () {
        changeSection_2();
      }, 1200);

      img.onload = function () {
        img_height = img.height;
        img_width = img.width;
        drawImageActualSize();
        contextReal.drawImage(img, 0, 0);
      };
      img.src = fileURL;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This file is not an image");
    dragArea.classList.remove("active");
  }
});

//when input an image, load the image
img_input.addEventListener("change", function () {
  openDrawingPage();
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
}

function changeSection_2() {
  section_2.classList.add("animate__animated", "animate__bounceInLeft");
  section_1.style.display = "none";
  section_2.style.display = "block";
}
