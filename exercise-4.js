function dataHandling2(arr) {
    console.log("First array : ",arr);
    //splice task - nama
    arr.splice(1, 1, "Roman Alamsyah Elsharawy")
    //splice task - provinsi
    arr.splice(2, 1, "Provinsi Bandar Lampung")
    //splice task - gender, sekolah
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log("Array with splice ",arr);

    //switch month date
    var date = arr[3].split("/"); // array for sorting
    var joinDate = date.slice(0, date.length); // array for joining
    switch(date[1]) {
        case '01': {
            console.log("Januari")
            break;
        }
        case '02': {
            console.log("Februari")
            break;
        }
        case '03': {
            console.log("Maret")
            break;
        }
        case '04': {
            console.log("April")
            break;
        }
        case '05': {
            console.log("Mei")
            break;
        }
        case '06': {
            console.log("Juni")
            break;
        }
        case '07': {
            console.log("Juli")
            break;
        }
        case '08': {
            console.log("Agustus")
            break;
        }
        case '09': {
            console.log("September")
            break;
        }
        case '10': {
            console.log("Oktober")
            break;
        }
        case '11': {
            console.log("November")
            break;
        }
        case '12': {
            console.log("Desember")
            break;
        }
    }

    // Sorting descending date
    console.log("Date before sorting :", date);
    console.log("Date sorting descending :", date.sort((x,y) => y - x));

    // Join date (-)
    console.log("Join date: ", joinDate.join("-"));
    
    // nama 15 karakter
    console.log(arr[1].slice(0, 15));
}
//contoh input
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input);