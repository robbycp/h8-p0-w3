function dataHandling(arr) {
    for(var baris = 0; baris < arr.length; baris++) {
        console.log("Nomor ID: " + arr[baris][0]);
        console.log("Nama Lengkap: " + arr[baris][1]);
        console.log("TTL: " + arr[baris][2] + " " + arr[baris][3]);
        console.log("Hobi: " + arr[baris][4]);
        console.log("");
    }
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);