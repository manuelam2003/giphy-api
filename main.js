const img = document.querySelector("img");
const input = document.querySelector("input");
const btn = document.querySelector("button");
var curQuery = "cats"

const changeImage = function (query) {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=0vYQTBN9dFFjcydiLOjCeeZmN3PYs8HU&s=" + query,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

changeImage(curQuery);

btn.addEventListener("click", () => {
  if (input.value!==""){
    curQuery = input.value;
  }
  changeImage(curQuery);
});

