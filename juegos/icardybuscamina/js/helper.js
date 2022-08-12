let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = (distance) => {
  if (distance < 30) {
    return "YA CASI ES TUYA !";
  } else if (distance < 40) {
    return "CASI CHAJA";
  } else if (distance < 180) {
    return "TAS LEJOS BUITRE";
  } else {
    return "FRIO COMO EL CORAZON DE TU SUEGRA !";
  }
};
