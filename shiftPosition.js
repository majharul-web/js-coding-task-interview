// shiftPosition.js

const shiftPosition = arr => {
    /* shifting array elements */

    let temp = arr[0];
    let n = arr.length;
    for (i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
    console.log(temp);

}

const myArr = [1, 2, 3, 4, 5, 6]

shiftPosition(myArr);