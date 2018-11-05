const doTimes = (times, callback, constructor = false) => {

	if (typeof times !== 'number') {
		throw 'do-times expected the first argument to be a number'
	}

	if (typeof callback !== 'function') {
		throw 'do-times expected the second argument to be a function'
	}

	if (!!constructor && typeof constructor !== 'boolean') {
		throw 'do-times expected the third argument to be a boolean'
	}

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
