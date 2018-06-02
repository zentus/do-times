const doTimes = (times, callback) => {
	Array.from(Array(times)).forEach((undefined, index) => {
		const time = index + 1
	  callback(time);
	})
}

module.exports = doTimes
