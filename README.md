# cond

> Lisp inspired conditional construct (COND) in Javascript.

[COND](https://www.cis.upenn.edu/~matuszek/LispText/lisp-cond.html) is a function which takes an arbitrary number clauses. A *clause* contains a list of two expressions. First expression is a condition (or predicate) and the second is the result. Each clause is ran in order, immediately returning the result where the condition is true.

# Install

```bash
npm install conds
```

```bash
bower install conds
```

# Usage

```javascript
const cond = require('conds');

const fn = cond([
  [t => t === 0, `Water freezes at 0°C`],
  [t => t === 100, `Water boils at 100°C`],
  [true, t => `Nothing special happens at ${t}°C`]
]);

console.log(fn(0)); // 'Water freezes at 0°C'
console.log(fn(50)); // 'Nothing special happens at 50°C'
console.log(fn(100)); // 'Water boils at 100°C'
```

# Test

```bash
npm test
```

# License

MIT
