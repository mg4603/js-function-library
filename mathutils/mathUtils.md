# Math Util Functions Documentation

## Functions

### `squared(num)`

Calculates the square of a given number.

#### Parameters
| Name | Type | Description | 
| ---- | ---- | ----------- |
| `num`| `number` | The number to be squared. |

#### Returns
| Type | Description |
| ---- | ----------- |
| `number` | The square of the number. |

#### Throws
| Type | Description |
| ---- | ----------- |
| `TypeError` | Throws an error if the input is not a number. |

#### Examples

```javascript
const { squared } = require('./mathUtils.js');

console.log(squared(4)); // Output: 16

try {
    console.log(squared('hello'));
} catch (error) {
    console.error(error.message);
}
```
--------------

### `cubed(num)`

Calculates the cube of a given number.

#### Parameters
| Name | Type | Description | 
| ---- | ---- | ----------- |
| `num`| `number` | The number to be cubed. |

#### Returns
| Type | Description |
| ---- | ----------- |
| `number` | The cube of the number. |

#### Throws
| Type | Description |
| ---- | ----------- |
| `TypeError` | Throws an error if the input is not a number. |

#### Examples

```javascript
const { cubed } = require('./mathUtils.js');

console.log(cubed(4)); // Output: 64

try {
    console.log(cubed('hello'));
} catch (error) {
    console.error(error.message);
}
```
--------------


### `factorial(num)`

Calculates the factorial of a given number.

#### Parameters
| Name | Type | Description | 
| ---- | ---- | ----------- |
| `num`| `number` | The number to calculate the factorial of. |

#### Returns
| Type | Description |
| ---- | ----------- |
| `number` | The factorial of the number. |

#### Throws
| Type | Description |
| ---- | ----------- |
| `TypeError` | Throws an error if the input is not a number. |

#### Examples

```javascript
const { factorial } = require('./mathUtils.js');

console.log(factorial(4)); // Output: 24

try {
    console.log(factoriial('hello'));
} catch (error) {
    console.error(error.message);
}
```
--------------

### `random(num)`

Returns a random integer greater than or equal to zero and lesser than num.

#### Params
| Name | Type | Description |
| ---- | ---- | ----------- |
| `num` | `number` | The number less than which the random number should be. |

#### Returns
| Type | Description |
| ---- | ----------- |
| `number` | A random integer greater than or equal to zero and less than input. |

#### Throws
| Type | Description |
| ---- | ----------- |
| `TypeError` | Throws an error if the input is not a number. |
| `RangeError` | Throws an error if the input is less than or equal to zero.

#### Examples

``` javascript
const { random } = require('./mathUtils.js');

console.log(random(10)); //Output: a random integer >= 0 and < 10
console.log(random(100)); //Output: a random integer >= 0 and < 100
```
-----

### `randomBetween(start, end)`

Return a random integer greater than or equal to start and less than end.

#### Params
| Name | Type | Description |
| ---- | ---- | ----------- |
| `start` | `number` | The number that the random number returned should be greater than or equal to. |
| `end` | `number` | The number that the random number returned should be less than. |

#### Returns
| Type | Description |
| ---- | ----------- |
| `number` | A random integer greater than or equal to start and less than end. |

#### Throws
| Type | Description |
| ---- | ----------- |
| `TypeError` | Throws TypeError if either start or end are not numbers. |
| `RangeError` | Throws RangeError if start >= end. |

#### Examples
```javascript
const { randomBetween }  = require('./mathUtils.js');

console.log(randomBetween(5, 10)); //Output: an integer >= 5 and < 10

try {
    console.log(randomBetween(15, 10)); 
} catch(error) {
    console.log(error.message); // Output: Start must be less than end
}
```