// An alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments


// Create an alarm that does something after some time has passed
 const alarm = (timeUntilAlarm, actionAlarm) => {
  setTimeout(() => actionAlarm(), timeUntilAlarm);
};

/**
 * Plays a given sound in the node terminal
 * @param {string} string - The sound code to play in the terminal
 */
const beepInTerminal = () => process.stdout.write('\x07');

/**
 * Function that returns Node command line arguments
 * @param {boolean} argumentsOnly Set to `true` to only return the
 * arguments that were provided in the command line
 * @returns {Array} The arguments
 */
 const argV = (argumentsOnly) => argumentsOnly ? process.argv.slice(2) : process.argv;

const queueAlarms = (actionAlarms, ...timers) => {
  if (timers.length === 0) return;
  timers.forEach(timer => alarm(timer, actionAlarms));
};

// TEST CASE:
queueAlarms(beepInTerminal, 1000, 2500, 4000, 5500);