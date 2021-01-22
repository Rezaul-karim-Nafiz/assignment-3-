//problem solving kilometerToMeter//

function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}
var meter = kilometerToMeter();

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice  = 10 * watch;
    var mobilePrice = 50 * mobile;
    var laptopPrice = 500 * laptop;
    var totalSumOfPrice = watchPrice + mobilePrice + laptopPrice;
    return totalSumOfPrice;
}
var totalCost = budgetCalculator();

//problem solving hotelCost//

function hotelCost(day) {
    if(day <= 10){
        hotelCharge = day * 100;
    }else if(day <= 20){
        var firstPart = 10 * 100;
        var reamining = day - 10;
        var secondPart = reamining * 80;
            hotelCharge = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var reamining = day - 20;
        var thirdPart = reamining * 50;
            hotelCharge = firstPart + secondPart +thirdPart;  
    }
    return hotelCharge;
};