

const Type = require("./modules/Type.js");
const RangeContainer = require("./modules/rangeContainer.js");


const NUMBER = 'NUMBER';
const LOWER = 'LOWER';
const UPPER = 'UPPER';

let algorithms = {
    alphaNumeric :[1,2,3],
    alphaNumericLowerCase : [1,3],
    alpha : [2,3],
    alphaLower :[3],
    alphaUpper : [2],
    numeric:[1],
};

let rangeContainer = new RangeContainer([
        new Type(NUMBER,1,48,57 ),
        new Type(UPPER ,2,65,90 ),
        new Type(LOWER ,3,97,122),
    ]);


module.exports = class Random {
    static chooseChar(ranNum){
        return String.fromCharCode(ranNum);
    }
    static chooseNum({min,max}){
        return Math.floor(Math.random() * (max-min) + min)
    }
    static generate(length,algorithm){
        let id = '';
        while(length--){
            let config = algorithms[algorithm];
            let range = rangeContainer.selectRange(config);
            let randomNumber = this.chooseNum(range);
            let character = this.chooseChar(randomNumber);
            id += character;
        }
            return id;
    }
    static RandomBetween (min, max){
        return Random.chooseNum({min,max});
    }
    static randomAlphaNumeric(length){
        return Random.generate(length,"alphaNumeric");
    }
    static randomAlphaNumericLower(length){
        return Random.generate(length,"alphaNumericLowerCase");
    }
    static randomStringLowerCase(length) {
        return Random.generate(length,"alphaLower");
    }
    static randomStringUpperCase(length) {
        return Random.generate(length,"alphaUpper");
    }
    static randomStringMixedCase(length) {
        return Random.generate(length,"alpha");
    }
    static randomStringNumeric(length){
        return Random.generate(length,"numeric");
    }
}










