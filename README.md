# do-times
### **Do something n times**
The speed of a `for` loop, but with nicer syntax.

## Usage
```javascript
import doTimes from 'do-times'

doTimes(3, time => console.log(`${time} dice`))
//=> 1 dice
//=> 2 dice
//=> 3 dice
```

#### With index
```javascript
doTimes(5, (_, index) => console.log(index))

//=> 0
//=> 1
//=> 2
//=> 3
//=> 4
```

#### Return a function
do-times is immediately invoked by default, and returns `undefined`. If you pass in `false` as the third argument, it will return a function instead.

```javascript
const printApple = () => console.log('🍎')

const printThreeApples = doTimes(3, printApple, false)

printThreeApples()
//=> 🍎
//=> 🍎
//=> 🍎
```

## License

MIT
