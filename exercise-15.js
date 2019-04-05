function groupAnimals(animals) {
    // you can only write your code here!
    // get all first letter
    var firstLetterArr = [];
    for (var x = 0; x < animals.length; x++) {
        var firstLetterWord = animals[x][0];
        if (!firstLetterArr.includes(firstLetterWord)) {
            firstLetterArr.push(firstLetterWord);
        }
    }
    firstLetterArr.sort();
    // grouping value
    var arr_animal_new = [];
    for (var index_char = 0; index_char < firstLetterArr.length; index_char++) {
        var arr_animal_char = [];
        for (var index_animal = 0; index_animal < animals.length; index_animal++) {
            if (animals[index_animal][0] == firstLetterArr[index_char]) {
                arr_animal_char.push(animals[index_animal])
            }
        }
        arr_animal_new.push(arr_animal_char);
    }
    return arr_animal_new;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]