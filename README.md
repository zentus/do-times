# do-times
### **Do something n times**
The speed of a for loop, but with nicer syntax.

## Usage
```javascript
import doTimes from 'do-times'

const { log } = console

doTimes(2, () => log('Hi'))
//=> hi
//=> hi
```

#### With time count
```javascript
const sayHi = time => log(`${time} hi!`)

doTimes(5, sayHi)
//=> 1 hi!
//=> 2 hi!
//=> 3 hi!
//=> 4 hi!
//=> 5 hi!
```

#### Curried
```javascript
const emojiTimes = (times, emoji) => doTimes(times, time => log(`#${time} ${emoji}`))

emojiTimes(4, '👏')
//=> #1 👏
//=> #2 👏
//=> #3 👏
//=> #4 👏
```

#### Curried with index
```javascript
const listUpToFourAnimals = animals => doTimes(4, (time, index) => {
	if (animals[index]) {
		log(animals[index])
	}
})

const animals = ['Ape', 'Zebra', 'Lion', 'Sloth', 'Snake', 'Lizard']

listUpToFourAnimals(animals)
//=> Ape
//=> Zebra
//=> Lion
//=> Sloth
```

#### Constructed
```javascript
// Third argument being true, means it should not run directly, but instead return a new function
const threeApples = doTimes(3, () => log('🍎'), true)

threeApples()
//=> 🍎
//=> 🍎
//=> 🍎
```

#### Constructed with additional arguments
```javascript
// All arguments after index, will be spread out in the returned function
const getDrinkAndFood = (time, index, drink, food) => {
  log(`${index}: I drink ${drink} and eat ${food}`)
}
const listDrinkAndFoodTwice = doTimes(2, getDrinkAndFood, true)

listDrinkAndFoodTwice('Juice', 'Tacos')
//=> 0: I drink Juice and eat Tacos
//=> 1: I drink Juice and eat Tacos

```

## License

MIT
