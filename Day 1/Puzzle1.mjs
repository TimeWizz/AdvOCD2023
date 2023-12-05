import { text } from "./Puzzle1Text.mjs"

const textArr = text.split("\n");
const numRegEx = /\d+/g;

const splitNums = (array) => {
    let total = 0;
    for (const sub of array) {
        let str1 = sub.match(numRegEx).join("")
        console.log(str1)
        str1 = Number(str1[0] + str1[str1.length - 1])
        console.log(str1)
        total = total + str1;
    }
    
    console.log(total)
}

splitNums(textArr);