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

This repo uses native ES modules (`"type": "module"` in `package.json`). Import
functions from their source files:

### greet

`greet(name)` returns a greeting string. `name` must be a non-empty string;
otherwise it throws `TypeError`.

```js
import { greet } from "./src/greet.js";

greet("Ada"); // "hello, Ada"

greet(""); // TypeError: name must be a non-empty string
```

### sum

`sum(a, b)` returns the sum of two finite numbers. Both arguments must be
finite numbers; otherwise it throws `TypeError`.

```js
import { sum } from "./src/sum.js";

sum(2, 3); // 5
sum(-1, 1); // 0

sum("1", 2); // TypeError: Arguments must be finite numbers
sum(Infinity, 2); // TypeError: Arguments must be finite numbers
```
