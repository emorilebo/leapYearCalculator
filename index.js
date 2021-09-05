function isLeapYear(year){
    if((year%4)==0){
        alert( year + "  Leap year");
        if((year%100)==0){
            alert( year + " NOT a leap year");
            if((year%400)==0){
            alert( year + "  Leap year");
        }
        } else {
            alert(year + " Leap year")
        }
    }else{
        alert(year + "  Not a leap year");
    }
}

var year =  prompt("Enter year ")
isLeapYear(year);