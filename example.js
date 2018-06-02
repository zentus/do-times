const doTimes = require('../do-times')

const sayHi = time => console.log(`Hi, ${time} times`)

doTimes(7, sayHi)
