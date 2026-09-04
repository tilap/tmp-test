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

Import the functions from `src/` and call them in your code:

```javascript
import { greet } from "./src/greet.js";
import { sum } from "./src/sum.js";

greet("Ada"); // "hello, Ada"
sum(2, 3);    // 5
```

`greet` expects a non-empty string and throws `TypeError` otherwise. `sum` expects two finite numbers and throws `TypeError` otherwise.
