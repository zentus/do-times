const loop = (times, callback, ...args) => {
	for (let index = 0; index < times; index++) {
		callback(index + 1, index, ...args);
	}
}

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

	if (!constructor) {
		loop(times, callback)
	}

	return (...args) => loop(times, callback, ...args)
}

module.exports = doTimes
