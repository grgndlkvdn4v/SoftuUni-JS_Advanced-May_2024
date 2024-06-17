function timeToWalk(steps, stepLength, speed) {

  const distance = steps * stepLength // in meters
  const speedMinS = (speed * 1000) / 3600; // speed in meters/seconds

  const timeInSeconds = distance / speedMinS;
  const breaksTime = Math.floor(distance / 500) * 60 // time for brakes
  const totalTime = timeInSeconds + breaksTime;

  console.log(convertSeconds(totalTime));
}


function convertSeconds(input) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let secondsLeft = input;
  while (secondsLeft > 0) {
    
    if (secondsLeft >= 3600) {
      secondsLeft -= 3600;
      hours++;
    } else if (secondsLeft >= 60) {
      secondsLeft -= 60;
      minutes++;
    } else {
      seconds += secondsLeft;
      secondsLeft = 0;
    }
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const output = `${hours}:${minutes}:${Math.round(seconds)}`;
  return output
}

// timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);