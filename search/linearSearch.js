// Give me an unsorted array of 20 fake names and a name to search for

const names = ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Stuart', 'Mick', 'Keith', 'Ronnie', 'Charlie', 'Brian', 'Roger', 'John', 'Paul', 'George', 'Ringo', 'Pete', 'Stuart', 'Mick', 'Keith'];

const nameToFind = 'John';

// Javascript has built in functions to search arrays in a linear fashion
// indexOf() returns the index of the first occurance of the value
// includes() returns true or false if the value is in the array
// lastIndexOf() returns the index of the last occurance of the value
// findIndex() returns the index of the first occurance of the value
// find() returns the first occurance of the value

// The find method requires a callback function that returns true or false, similar to array methods like filter and map

names.find(name => name === nameToFind) // returns "John"
names.indexOf(nameToFind) // returns 0 index

// The Javascript search functions work on linear search, meaning they start at the beginning of the array and move through it until they find the value they are looking for.

function linearSearch(array, match){
    for (let i=0; i<array.length; i++){
        if (array[i] === match) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(names, "Paul")) // returns 1


