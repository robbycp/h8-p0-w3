function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var arr_even = [];
    var arr_odd = [];
    var arr_three = [];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 3 == 0) {
            arr_three.push(arr[x]);
        } else if (arr[x] % 2 != 0) {
            arr_odd.push(arr[x])
        } else if (arr[x] % 2 == 0) {
            arr_even.push(arr[x])
        }
    }
    return [arr_even, arr_odd, arr_three];

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]