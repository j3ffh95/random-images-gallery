const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}
