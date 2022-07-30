// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "TA QUE PELAAAA !";
  } else if (distance < 40) {
    return "MUY CALIENTE";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Tivio";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Realmente frio";
  } else {
    return "FRIO COMO EL CORAZON DE TU SUEGRA !";
  }
}
