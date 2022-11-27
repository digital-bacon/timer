const readline = require('readline');

/**
 * Function that creates an alarm that does something after some time
 * has passed
 * @param {number} timeUntilAlarm - Time, in milliseconds, until an
 * alarm does something
 * @param {Function} actionAlarm - A callback function that will be
 * invoked when the timer has expired
 */
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

/**
 * Function that queues any number of alarms and will perform an action
 * after each requested delay has transpired
 * @param {Function} actionAlarms - Callback function invoked when each
 * alarm timer is expired
 * @param  {...any} requestedDelays - Any amount of number parameters
 * denoting when each alarm will ring, in milliseconds
 */
const queueAlarms = (actionAlarms, ...requestedDelays) => {
  let timers = Array(requestedDelays);
  timers = timers.flat(Infinity);
  if (timers.length === 0) return;
  timers.forEach(timer => {
    if (Number(timer) > 0) {
      alarm(timer, actionAlarms);
    }
  });
};

const inputHandler = {

  b: function() {
    beepInTerminal();
  },

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	inputHandler[input]();
	rl.close();
});

// // TEST CASE:
// queueAlarms(beepInTerminal, argV(true));