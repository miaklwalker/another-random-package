const Random = require("../../index.js");

describe("Main Package: Random", () => {
    describe("chooseChar", () => {
        let data = [
            [48, "0"],[49, "1"],[50, "2"],
            [51, "3"],[52, "4"],[53, "5"],
            [54, "6"],[55, "7"],[56, "8"],
            [57, "9"],[65, "A"],[66, "B"],
            [67, "C"],[68, "D"],[69, "E"],
            [70, "F"],[71, "G"],[72, "H"],
            [73, "I"],[74, "J"],[75, "K"],
            [76, "L"],[77, "M"],[78, "N"],
            [79, "O"],[80, "P"],[81, "Q"],
            [82, "R"],[83, "S"],[84, "T"],
            [85, "U"],[86, "V"],[87, "W"],
            [88, "X"],[89, "Y"],[90, "Z"],
            [97, "a"],[98, "b"],[99, "c"],
            [100, "d"],[101, "e"],[102, "f"],
            [103, "g"],[104, "h"],[105, "i"],
            [106, "j"],[107, "k"],[108, "l"],
            [109, "m"],[110, "n"],[111, "o"],
            [112, "p"],[113, "q"],[114, "r"],
            [115, "s"],[116, "t"],[117, "u"],
            [118, "v"],[119, "w"],[120, "x"],
            [121, "y"],[122, "z"]
        ]
        test.each(data)("When passed %i should return %s", (code,char) => {
            expect(Random.chooseChar(code)).toBe(char);
        })
    });
    describe("chooseNum & RandomBetween (user interface) ",()=>{
        let data = [
            [0,1],
            [1,10],
            [1,100],
            [50,60],
            [48,49],
        ]
        test.each(data)("chooseNum returns a number between %i and %i",(min,max)=>{
            let random = Random.RandomBetween(min,max);
            expect(random).toBeLessThanOrEqual(max);
            expect(random).toBeGreaterThanOrEqual(min);
            random = Random.chooseNum({min,max});
            expect(random).toBeLessThanOrEqual(max);
            expect(random).toBeGreaterThanOrEqual(min);
        });
    });
    describe("String Generators",()=>{
        // description, regex, length, method
        let length = 22;
        let data = [
            ["randomAlphaNumeric","Upper,Lower,Numeric",/([A-Za-z1-9])/],
            ["randomAlphaNumericLower","Lower, Numeric",/([a-z1-9])/],
            ["randomStringLowerCase","Lower",/([a-z])/],
            ["randomStringUpperCase","Upper",/([A-Z])/],
            ["randomStringMixedCase","Upper, Lower",/([A-Za-z])/],
            ["randomStringNumeric","Numeric",/([1-9])/]
        ]
        test.each(data)("%s Should return a string containing: %s",(method,_,reg)=>{
            let random = Random[method](length);
            expect(random).toHaveLength(length);
            expect(random).toMatch(reg);
        })
    })
})