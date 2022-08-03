

// remove islands of black not on edges...
//
//
// input:
//  [   
//      [1, 0, 0, 0, 0, 0],
//      [0, 1, 0, 1, 1, 1],
//      [0, 0, 1, 0, 1, 0],
//      [1, 1, 0, 0, 1, 0],
//      [1, 0, 1, 1, 0, 0],
//      [1, 0, 0, 0, 0, 1],
//  ]
//
// output:
//  [   
//      [1, 0, 0, 0, 0, 0],
//      [0, 0, 0, 1, 1, 1],
//      [0, 0, 0, 0, 1, 0],
//      [1, 1, 0, 0, 1, 0],
//      [1, 0, 0, 0, 0, 0],
//      [1, 0, 0, 0, 0, 1],
//  ]
//

generateArrDetails = (arr) => {
    let rowLimit = arr.length;
    let columnLimit = arr[0].length;
    let arrDetails = {}

    for (let row = 0; row < rowLimit; row++) {
        for (let column = 0; column < columnLimit; column++) {
            let sqrId = `r${row}c${column}`;
            let sqrValue = arr[row][column];
            let rowCoordValue = row;
            let columnCoordValue = column;

            arrDetails[sqrId] = {'sqrId': sqrId, 'sqrValue': sqrValue, 'row': rowCoordValue, 'column': columnCoordValue}
        } 
    }

    return arrDetails;
}

determineAdjs = (arr,arrObj) => {
    let determinedAdjs = [];

    arr.forEach(sqrId => {
        if(arrObj.hasOwnProperty(sqrId)){
            determinedAdjs.push(arrObj[sqrId].sqrValue);
        }
    });

    return determinedAdjs;

}

getAdjacents = (sqrId, arrObj) => {
    let potentialAdj = [];

    let sqrIdElements = sqrId.split('');
    let row = Number(sqrIdElements[1]);
    let rowPlus = row + 1;
    let rowMinus = row - 1;

    let column = Number(sqrIdElements[3]);
    let columnPlus = column + 1;
    let columnMinus = column - 1;

    let leftAdj = `r${row}c${columnMinus}`;
    potentialAdj.push(leftAdj);

    let rightAdj = `r${row}c${columnPlus}`;
    potentialAdj.push(rightAdj);

    let topAdj = `r${rowMinus}c${column}`;
    potentialAdj.push(topAdj);

    let bottomAdj = `r${rowPlus}c${column}`;
    potentialAdj.push(bottomAdj);

    let adjacents = determineAdjs(potentialAdj, arrObj);

    return adjacents;
}

removeIslands = (arr) => {

    console.log(`arr before:`);
    console.log(arr);

    let arrDetails = generateArrDetails(arr);

    // console.log(`arrDetails:`);
    // console.log(JSON.stringify(arrDetails));

    let squares = Object.keys(arrDetails);

    // console.log(`squares:`);
    // console.log(squares);

    for (const key in arrDetails) {

        let adjs = getAdjacents(key, arrDetails);
        let row = arrDetails[key]['row'];
        let column = arrDetails[key]['column'];
        let isEdgeRow = ((row === 0) || (row === (arr.length - 1)));
        let isEdgeColumn = ((column === 0) || (column === (arr[0].length - 1)));
        let isEdgePostion = isEdgeRow || isEdgeColumn;
        let hasAdjOnes = adjs.includes(1);
        let ChangeThisValue = !isEdgePostion && !hasAdjOnes;

        // console.log(`key: ${key} | row: ${row} | column: ${column} | isEdgeRow:`);
        // console.log(`isEdgeRow: ${isEdgeRow} | isEdgeColumn: ${isEdgeColumn} | isEdgePostion: ${isEdgePostion}`);
        // console.log(`hasAdjOnes: ${hasAdjOnes} | ChangeThisValue: ${ChangeThisValue}`);

        if(ChangeThisValue){
            // console.log(`Not Changing this value!!!`);
            arr[row][column] = 0;
        }else{
            // console.log(`Changing this value!!!`);
            // arr[row][column] = 0;
        }

        // arrDetails[key]['adjacents'] = adjs;
        // console.log(`${key} details:`);
        // console.log(`${JSON.stringify(arrDetails[key])}`);
    }

    console.log(`arr after:`);
    console.log(arr);

    return arr;

}

let arr1 = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]

removeIslands(arr1);

//  [   
//      [1, 0, 0, 0, 0, 0],
//      [0, 1, 0, 1, 1, 1],
//      [0, 0, 1, 0, 1, 0],
//      [1, 1, 0, 0, 1, 0],
//      [1, 0, 1, 1, 0, 0],
//      [1, 0, 0, 0, 0, 1],
//  ]