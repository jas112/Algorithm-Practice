// 01. Reverse an array without affecting special characters

reverseStr = (str) => {
    console.log('@reverseStr...');

    testChar = (c) => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(c)){
            // console.log(`${c} => is a special character!`);
            return true;
        } else {
            // console.log(`${c} => is not a special character!`);
            return false;
        }
    }


    let start = 0;
    let end = str.length - 1;
    let strArr = [...str];

    console.log([...strArr].join(''));

    while (start <= end) {

        let temp;

        let isStartSpecial = testChar(strArr[start]);
        let isEndSpecial = testChar(strArr[end]);

        if (isStartSpecial && isEndSpecial) {
            start += 1;
            end -= 1;
        }

        if (isStartSpecial && !isEndSpecial) {
            start += 1;
        }

        if (!isStartSpecial && isEndSpecial) {
            end -= 1
        }

        if (!isStartSpecial && !isEndSpecial) {
            temp = strArr[end];
            strArr[end] = strArr[start];
            strArr[start] = temp;
            start += 1;
            end -= 1;
        }
        
    }

    console.log([...strArr].join(''));

}

// reverseStr('asdfasd/.,fasdtgeg,(*)(&)&&)&*^LKHOGHOKJuhfufru(*&^&*&%*%');

// reverseStr('a@a#a$b%b^c&c*c(ddd!fff');

// reverseStr('Ab,c,de!$');

// 02. All Possible Palindromic Partitions

allPosPalPartsStr = (str) => {
    console.log(`@allPosPalPartsStr... target string: ${str}`);

    let palindromicResults = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length + 1; j++) {
            let strPartition = str.substring(i,j);
            let revStrPartitionArr = [...strPartition].reverse();
            let revStrPartition = revStrPartitionArr.join('');
            let isPalindromic = strPartition === revStrPartition;
            console.log(`i: ${i} | j: ${j} | strPartition: ${strPartition} | revStrPartition: ${revStrPartition} | isPalindromic: ${isPalindromic}`);
            if (isPalindromic) {
                palindromicResults.push(strPartition);
            }
        }
    }

    console.log(palindromicResults);

    return palindromicResults;
}

// allPosPalPartsStr('allPosPalPartsStr');
allPosPalPartsStr('tenet');
allPosPalPartsStr('Partitions');

// 03. Count triplets with sum smaller than a given value

countTriplets = (arr) => {
    console.log('@reverseArr...');
    let results = [];
    return results;
}

// 04. Convert array into Zig-Zag fashion

zigZagArr = (arr) => {
    console.log('@zigZagArr...');
    let results = [];
    return results;
}

// 5. Reverse an array without affecting special characters

// Input:   str = "a,b$c"
// Output:  str = "c,b$a"

// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"

function isAlphaNum(charStr){
    var charCodeValue = charStr.charCodeAt();
    if (!(charCodeValue > 47 && charCodeValue < 58) && // numeric (0-9)
        !(charCodeValue > 64 && charCodeValue < 91) && // upper alpha (A-Z)
        !(charCodeValue > 96 && charCodeValue < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}

function abcReverse(str){
    var temp = [];
    var result = '';

    console.log(`input string: ${str}`);

    for(var i = 0; i < str.length; i++){
        var isAlphaNumeric = isAlphaNum(str[i]);
        console.log(`character: ${str[i]} | isAlphaNumeric: ${isAlphaNumeric}`)
        if(isAlphaNumeric){
            temp.push(str[i]);
            console.log(`temp[]: ${temp}`);
        }
    }

    temp.reverse();
    console.log(`temp[]: ${temp}`);

    for(var j = 0; j < str.length; j++){
        var isAlphaNumeric = isAlphaNum(str[j]);
        console.log(`character str[j]: ${str[j]} | isAlphaNumeric: ${isAlphaNumeric}`)
        if(isAlphaNumeric){
            result += temp[0];
            temp.shift();
            console.log(`result: ${result}`);
            console.log(`temp[]: ${temp}`);
        }else{
            result += str[j];
        }
    }

    console.log(`output result: ${result}`)

    return result;
}

abcReverse('Ab,c,de!$');

abcReverse("a!!!b.c.d,e'f,ghi");