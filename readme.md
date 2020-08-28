# another-random-package

## A nice addition to the built-in Javascript Math.random()

This package is a few of my most commonly used random functions.

* Generate a Random Number between a range 
    `.RandomBetween(#Min, #Max);`
* Generate a Random String
    `.randomStringAlphanumeric(#length)`

----------

## Methods

* chooseChar
  * Returns a utf-8 character from a character code
  
* ChooseNum
  * The internal method for choosing a number in a range accepts input in the form of a object that has a min, max property
  
* generate
  * The Generate method is the internal method for generating all strings output by the object.
  
* RandomBetween

* randomStringAlphaNumeric
  * Returns a string of specified length containing:[UpperCase, LowerCase, Numeric] Characters
  
* randomStringAlphaNumericLower
  * Returns a string of specified length containing:[LowerCase, Numeric] Characters
  
* randomStringLowerCase
  * Returns a string of specified length containing:[ LowerCase ] Characters
  
* randomStringUpperCase
  * Returns a string of specified length containing:[UpperCase] Characters
  
* randomStringMixedCase
  * Returns a string of specified length containing:[UpperCase, LowerCase] Characters
  
* randomStringNumeric
  * Returns a string of specified length containing:[Numeric] Characters

----------

## Usage

This can be pretty easily used in most projects.
For Example:

```javascript
const Random = require("another-random-package");

let enemy = {
    name:"moblin",
    id:Random.randomStringAlphaNumeric(22),
}

```
