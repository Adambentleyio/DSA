// give me an array of 20 countries in an unordered list
const countries = ['United States', 'Canada', 'Mexico', 'United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Iceland', 'Japan', 'China', 'India', 'Australia', 'New Zealand'];

// give me an ordered list of 60 transcations with amounts between 0.99 and 1000 dollars from bank
const amounts = [0.99,  1.99,  2.99,  3.99,  4.99,  5.99,  6.99,
    7.99,  8.99,  9.99, 10.39, 11.99, 12.99, 13.99,
   14.99, 15.99, 16.99, 17.99, 18.99, 19.99, 20.99,
   21.99, 22.99, 23.99, 24.99, 25.99, 26.99, 27.99,
   28.99, 29.99, 30.00, 31.19, 32.99, 33.99, 34.99,
   35.99, 36.99, 37.99, 38.99, 39.99, 40.99, 41.99,
   42.99, 43.99, 44.99, 45.99, 46.99, 47.99, 48.99,
   49.99, 50.99,   120,   239,   310,   456,   500,
     600,   750,   800,   900,  1000];

// binary search works for a sorted array ONLY
// PSEUDOCODE as follows:
// loop through the array while both are true:
// (1) the middle pointer is not the value we're looking for, and
// (2) the left pointer is less or equal to the right pointer
// if the value at middle is smaller than target value then move pointer in the direction of the value
// (e.g. target 7, middle 3, move left pointer to middle +1)
// else the value must be smaller so move right pointer to middle -1
// after each check, update middle by adding left + right index and divide by 2

// function binarySearch(arr, value){
//     // check to see if array is empty
//     if (!arr.length) return "Oh no, submit an array";

//     let left = 0
//     let right = arr.length-1
//     let middle = Math.floor((left + right) / 2)

//     while(arr[middle] !== value && left <= right) {
//         if (arr[middle] < value) {
//             left = arr[middle] + 1
//         } else {
//             right = arr[middle] -1
//         }
//         middle = Math.floor((left + right) / 2)
//     }
//     return arr[middle] === value ? middle : -1
// }

function binarySearch(arr, value){
    // check to see if array is empty
    if (!arr.length) return "Oh no, submit an array";

    let left = 0
    let right = arr.length-1
    let middle = Math.floor((left + right) / 2)
    while(arr[middle] !== value && left <= right) {
        if (arr[middle] < value) left = arr[middle] + 1;
        else right = arr[middle] -1;
        middle = Math.floor((left + right) / 2)
    }
    return arr[middle] === value ? middle : -1
}


console.log(binarySearch(amounts, 1.99))