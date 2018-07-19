const doTimes = require('do-times')

// simple, constructed
const sayHiTwoTimes = doTimes(2, time => console.log(`Hi, ${time} times`), true)

// constructed with additional arguments
const listDrinkAndFoodFiveTimes = doTimes(5,
	(time, index, drink, food) => {
		console.log(`Hi, ${time} times. I drink ${drink} and eat ${food}`)
	}, true)


// curried
const saySomethingTimes = (times, word) => doTimes(times, time => console.log(`${word}, ${time} times`))

// curried with index
const listUpToFourDrinks = drinks => doTimes(4,
	(time, index) => {
		if (drinks[index]) {
			console.log(`${drinks[index]}`)
		}
	})

// run examples:
doTimes(2, () => console.log(`Cool!`))
sayHiTwoTimes()
listDrinkAndFoodFiveTimes('Juice', 'Tacos')
saySomethingTimes(10, 'yeah')
listUpToFourDrinks(['Lemonade', 'Water', 'Tea', 'Coca Cola', 'Sprite', 'Coffee'])
