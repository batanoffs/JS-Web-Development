function timeToWalk(steps, stepsLength, speed) {
    let distanceMeters = steps * stepsLength;
    let speedMetersInSec = speed / 3.6;
    let totalTimeSeconds = distanceMeters / speedMetersInSec;
    let delay = Math.floor(distanceMeters / 500);

    let timeMinutes = Math.floor(totalTimeSeconds / 60);
    let timeHours = Math.floor(timeMinutes / 60);
    let timeSeconds = totalTimeSeconds - timeMinutes * 60;

    let hours = timeHours < 10 ? `0` + timeHours : timeHours;
    let minutes = (timeMinutes % 60) + delay;
    minutes = minutes < 10 ? `0` + minutes : minutes;
    let seconds = timeSeconds < 10 ? `0` + timeSeconds : Math.round(timeSeconds);

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(41200, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
