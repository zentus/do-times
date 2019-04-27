const loop = (times, callback) => {
  for (let time = 1; time <= times; time++) {
    callback(time, time - 1)
  }
}

const doTimes = (times, callback, immediatelyInvoked = true) => {
  if (typeof times !== 'number') throw 'do-times expected the first argument [times] to be a number'
  if (typeof callback !== 'function') throw 'do-times expected the second argument [callback] to be a function'
  if (!immediatelyInvoked && typeof immediatelyInvoked !== 'boolean') throw 'do-times expected the third argument [immediatelyInvoked] to be a boolean'

  if (!immediatelyInvoked) return () => loop(times, callback)

  loop(times, callback)
}

module.exports = doTimes
