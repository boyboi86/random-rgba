# **Random rgba**

### Generate a random rgba string value in Javascript (ES6)

## **Installation**

> `npm install random-rgba --save`

or  

> `yarn add random-rgba`  

---

## **Syntax**

> **`randomRgba(alpha);`**

### **Parameters**

- `alpha`:
  Optional `integer` alpha value. This defaults to a random alpha value between `.1` and `1`.

### **Return value**  

- `randomRgba` will return a randomly generated rgba string value with the optionally supplied alpha value, or will generate a random alpha if none is supplied.

---

## **Usage**

**Import the `randomRgba` function**

```
import randomRgba from "random-rgba";
```

or

```
const randomRgba = require("random-rgba")
```

**Sample implementations**

```  
// Returns a random rgba string value with an alpha of ".47".
const myRandomRgba = randomRgba(47); // Outputs something like "rgba(34,126,218,.47)"

// Returns a random rgba string value with a random alpha value.
const myRandomRgba = randomRgba();
```
