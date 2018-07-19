const doTimes = (times, callback, constructor = false) => {

	const doThis = (t, c, ...args) => {
		for (let i = 0; i < t; i++) {
			c(i+1, i, ...args);
		}
	}

	if (!constructor) {
		doThis(times, callback)
	}

	return (...args) => doThis(times, callback, ...args)
}

module.exports = doTimes
