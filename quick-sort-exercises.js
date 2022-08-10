console.log('this is quick sort.');

function pivot(arr, start=0, end=arr.length+1){

    const swap = (arr, idx1, idx2) => {
        console.log(`swaping -> ${arr[idx1]} @ idx: ${idx1} & ${arr[idx2]} @ idx: ${idx2}`);
        console.log(`array before swap -> ${arr}`);
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
        console.log(`array after swap -> ${arr}`);
    }

    var pivot = arr[start];
    var swapIdx = start;

    for( var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1){

    console.log('-> quickSort');
    console.log(`arr input => [ ${arr} ]`);

    if(left < right){

        var pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIdx-1);
        //right
        quickSort(arr, pivotIdx+1, right);

    }
    return arr;
}

var inputArr1 = [4, 8, 2, 1, 5, 7, 6, 3];
var inputArr2 = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];
var inputArr3 = [4, 6, 9, 1, 2, 5, 3];

console.log(quickSort(inputArr1));
console.log(quickSort(inputArr2));
console.log(quickSort(inputArr3));