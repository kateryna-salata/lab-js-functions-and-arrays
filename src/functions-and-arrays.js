// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
    } else if (firstNum < secondNum) {
        return secondNum
    } else {
        return firstNum
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if ( words.length === 0) {
        return null;
    } else if (words.length === 1) {
        return words[0];
    } 

    let longestWord = "";

    for(let i = 0; i < words.length; i++) {
        if (longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else if(numbers.length === 1) {
        return numbers[0];
    } else {
        let sumOfNums = 0;
        for (let i = 0; i < numbers.length; i++) {
        sumOfNums += numbers[i];
        };
        return sumOfNums;
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    } else if(numbers2.length === 1) {
        return numbers2[0];
    } else {
        let sumOfNums2 = 0;
        for (let j = 0; j < numbers2.length; j++) {
        sumOfNums2 += numbers2[j];
        };
        let averageNum = sumOfNums2 / Math.floor(numbers2.length);
        return averageNum;
    }
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWord) {
    if (words2.length === 0) {
        return null;
    } else {
        for(let i = 0; i < words2.length; i++) {
            if (words2[i] === searchWord) {
                return true;
            };
        }
        return false;
    }
}
