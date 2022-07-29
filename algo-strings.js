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

// 05. Generate all possible sorted arrays from alternate elements of two given sorted arrays



// 06. Pythagorean Triplet in an array



// 07. Length of the largest subarray with contiguous elements



// 08. Find the smallest positive integer value that cannot be represented as sum of any subset of a given array



// 09. Smallest subarray with sum greater than a given value



// 10. Stock Buy Sell to Maximize Profit