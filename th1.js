let year = +prompt("nhập vào số năm cần kiểm tra");
let year1 = true
if (year % 4 == 0) {
    if (year % 100 != 0) {
        if (year % 400 == 0) {
            year1 = false
        }
    }
}
else {
    year1 = false
}
console.log(year1 ? "năm nhuận" : "không phải năm nhuận");