# Modules

* What is a module in node?
  - a javascript file.
* Why do we have modules?
  - so we don't have one file that's 10,000 lines long.
  - Other people can use our code.
  - We can **re use** our own code.
  - Abstraction & Encapsulation.


Every module gets its own version of the following variables:

* console.log(require);
* console.log(exports);
* console.log(module);
* console.log(__filename);
* console.log(__dirname);

if you are mutating the exports object, just add a property:

`exports.eatBrains = eatBrains;`

if you are re assigning the exports object, use  `module.exports`

`module.exports = anything`

```js
module.exports = {
  eatBrains: eatBrains
}
```

## Package Manager

"remember Sam's rant about negative 0"

- distribute easily
- host somewhere online
- package browser
- versioning of code

`npm`

## Testing

* Seeing if our code works
* `console.log` anything that will tell us if our code is working properly.

```js
npm i mocha --save-dev
```

mocha is a BDD testing framework
