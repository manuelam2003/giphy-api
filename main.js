const img = document.querySelector("img");
const input = document.querySelector("input");
const btn = document.querySelector("button");
var curQuery = "cats";

// const changeImage = function (query) {
//   fetch(
//     "https://api.giphy.com/v1/gifs/translate?api_key=0vYQTBN9dFFjcydiLOjCeeZmN3PYs8HU&s=" +
//       query,
//     { mode: "cors" }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       img.src = response.data.images.original.url;
//     })
//     .catch((err) => {
//       console.log("saliao");
//       img.src =
//         "https://media2.giphy.com/media/RHKFQREjOuvzhmm32g/giphy.gif?cid=9b8bad92slq5i0z547az1f7bdkac7k6xodh21agcvbz1ju8l&ep=v1_gifs_translate&rid=giphy.gif&ct=s";
//     });
// };

const asyncChangeImage = async function (query) {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=0vYQTBN9dFFjcydiLOjCeeZmN3PYs8HU&s=" +
        query,
      { mode: "cors" }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log("saliao");
    img.src =
    "https://media2.giphy.com/media/RHKFQREjOuvzhmm32g/giphy.gif?cid=9b8bad92slq5i0z547az1f7bdkac7k6xodh21agcvbz1ju8l&ep=v1_gifs_translate&rid=giphy.gif&ct=s";
  }   
};

asyncChangeImage(curQuery);

btn.addEventListener("click", () => {
  if (input.value !== "") {
    curQuery = input.value;
  }
  asyncChangeImage(curQuery);
});
