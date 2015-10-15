/**
 * Jarrod Smith
 * 10/8/15
 * SDI 1510 Section 1
 * Conditional Assignment
 */


//Variable

var creditScore;                //Users credit score
var principle;                  //Amount of the loan
var intrest;                    //The interest rate on the loan
var monthlyPayment;             //Number of monthly payments
var typePayments = true;        //If this is true you will input years of the loan, if false then you will enter months
var yearsOfLoan;                //How many year term the loan is.
var payment;

//Inputs

creditScore = prompt("Enter your credit score.");

if (creditScore = ""){
    creditScore = prompt("Please enter your credit score.")
}

if (creditScore < 600){
    intrest = (.01);                    //Intrest rate of %12

}else if (creditScore < 700){
    intrest = (.006666667);             //Intrest rate of %8

}else{
    intrest = (.00375);                 //Intrest rate of %4.5
}
   // console.log(intrest)

principle = Number(prompt("Enter the amount for mortgage loan for your home."));        //Enter the amount of the loan
typePayments = confirm("Click \"OK\" for years or click \"Cancel\"");                   //This decides for years or months

if (typePayments === true){

    yearsOfLoan = Number(prompt("Enter the amount of years of the loan."));
    monthlyPayment = yearsOfLoan * 12;
    console.log("You will make a total of " + monthlyPayment + " monthly payments.");

}else{

    monthlyPayment = prompt("Enter the number of monthly payments you will be making.");
    console.log("You entered that you will be making " + monthlyPayment + " monthly payments.")
}



//Equations



//Output

//console.log = ("Your monthly payment will be " + payment)

//Test