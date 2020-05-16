const loop = (times, callback) => {
  for (let time = 1; time <= times; time++) {
    callback(time, time - 1)
  }
}

const doTimes = (times, callback) => {
  if (typeof times !== 'number') throw 'do-times expected the first argument [times] to be a number'
  if (typeof callback !== 'function') throw 'do-times expected the second argument [callback] to be a function'

  loop(times, callback)
}

module.exports = doTimes
