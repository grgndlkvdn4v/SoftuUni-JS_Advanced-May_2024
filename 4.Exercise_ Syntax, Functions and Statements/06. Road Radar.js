function roadRadar(speed, area) {

  let limit;
  switch (area) {
    case "motorway": limit = 130; break;
    case "interstate": limit = 90; break;
    case "city": limit = 50; break;
    case "residential": limit = 20; break;
    default: break;
  }

  const difference = speed - limit;
  
  let status;
  if (difference <= 0 ) {
    const message = `Driving ${speed} km/h in a ${limit} zone`;
    console.log(message);
  } else if (difference <= 20) {
    status = 'speeding';
  } else if (difference <= 40) {
    status = 'excessive speeding';
  } else {
    status = 'reckless driving';
  }

  if (status) {
    console.log( `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}` );
  }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');