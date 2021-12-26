// negativeOnside.js

function segregateElements(arr, n) {
    let temp = [];

    // Traversal array and store +ve element in
    // temp array
    let j = 0; // index of temp
    for (let i = 0; i < n; i++)
        if (arr[i] >= 0)
            temp[j++] = arr[i];

    // If array contains all positive or all negative.
    if (j == n || j == 0)
        return;

    // Store -ve element in temp array
    for (let i = 0; i < n; i++)
        if (arr[i] < 0)
            temp[j++] = arr[i];

    for (let i = 0; i < n; i++) arr[i] = temp[i];

    console.log(temp)
}

// Driver program

let arr = [1, -1, -3, -2, 7, 5, 11, 6];
let n = arr.length;

segregateElements(arr, n);