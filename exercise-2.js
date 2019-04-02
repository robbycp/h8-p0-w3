function balikString(str) {
    var rev_kata = "";
    for(var x = str.length - 1; x >= 0; x--) {
        rev_kata += str[x];
    }
    return rev_kata;
}
//input "hello world!"
//output
//"!dlrow olleh"
console.log(balikString("hello world!"));