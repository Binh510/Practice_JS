// algorigm:
/*  1. input an arraySample
    2. setup indexOfMaxNegative = -1
    3. search arraySample for the first negative number, if found indexOfMaxNegative = i; then break
    4. search arraySample from i = indexOfMaxNegative + 1
    5. if arraySample[i] < 0 && arraySample[i] > arraySample[indexOfMaxNegative]
        indexOfMaxNegative = i;
    6. declare new array (called listOfIndex) to store index of  max negative numbers if the arraySample has many maxNegative number.
    7. search arraySample from indexOfMaxNegative, if arraySample[i] = arraySample[indexOfMaxNegative]
        add i in listOfIndex.






 */

var a = [4, 16, 5, 12, 5, 9, -3, -15, 6, 8];
var indexOfMaxNegative = -1;
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        indexOfMaxNegative = i;
        break;
    }
}
if (indexOfMaxNegative == -1) {
    console.log('Khong co phan tu am trong mang')
}
else {
    for (var i = indexOfMaxNegative + 1; i < a.length; i++) {
        if (a[i] < 0 && a[i] > a[indexOfMaxNegative]) {
            indexOfMaxNegative = i;
        }
    }
    var listOfIndex = [];
    for (var i = indexOfMaxNegative; i < a.length; i++) {
        if (a[i] === a[indexOfMaxNegative]) {
            listOfIndex.push(i)
        }
    }

    console.log('phan tu am lon nhat la ', a[indexOfMaxNegative], ' co index = ', listOfIndex);
}

