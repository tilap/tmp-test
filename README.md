# dummy-repo

A minimal Node library. It exists to be experimented on: small enough to read
in a minute, with a test command and a CI workflow already wired.

Nothing here is a real product. Create your own copy from this template and
change whatever you like.

## Install

```bash
npm install
```

## Test

```bash
npm test
```

## Usage

Import the helpers from `src/` and call them in your script:

```javascript
import { greet } from "./src/greet.js";
import { sum } from "./src/sum.js";

console.log(greet("Ada")); // "hello, Ada"
console.log(sum(1, 2));    // 3
```

Run the script with Node (ES modules):

```bash
node your-script.js
```
