// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

// It is known that all events are recorded in chronological order and two events can't occur in the same second.

// Return the minimum number of days during which the log is written.

const timelog = ["12:00:00", "12:00:00", "00:00:00"];

const checkLogs = (log) => {
  const secondsInDay = 24 * 60 * 60;
  let currentDay = 1;
  let lastTimestamp = log[0]

  for (let i = 1; i < log.length; i++) {
    const currentTimestap = log[i];
    const [lastHour, lastMin, lastSec] = lastTimestamp.split(":").map(Number)
    const [currentHour, currentMin, currentSec] = currentTimestap.split(":").map(Number)

    let timeDifference = (currentHour - lastHour) * 3600 + (currentMin - lastMin) * 60 + (currentSec - lastSec);

    if (timeDifference < 0) {
      timeDifference += secondsInDay;
    }

    if (timeDifference >= secondsInDay || (currentTimestap === "00:00:00" && timeDifference === 0)) {
      currentDay++
    }

    lastTimestamp = currentTimestap;
  }

  return currentDay
};

console.log(checkLogs(timelog));

