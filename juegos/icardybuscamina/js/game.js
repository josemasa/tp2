const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: 220,
  y: 150,
};

let $map = document.querySelector("#map");
let $distance = document.querySelector("#distance");
let clicks = 0;

$map.addEventListener("click", function (e) {
  console.log("click");
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 30) {
    alert(`GANASTE EN ${clicks} clicks!`);
    location.reload();
  }
});
