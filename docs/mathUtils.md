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
const { squared } = require('./src/mathUtils.js');

console.log(squared(4)); // Output: 16

try {
    console.log(squared('hello'));
} catch (error) {
    console.error(error.message);
}
```
--------------
