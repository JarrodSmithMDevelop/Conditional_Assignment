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
var payment;                    //The amount of the monthly payment
var intrestCompounded;          //Part of the compounding of intrest
var downPayment = 0;                //The amount of the down payment
//Inputs

creditScore = Number(prompt("Enter your credit score."));       //Enter the credit score

//Check to ensure user has entered a value
if (creditScore === 0){
    creditScore = prompt("Please enter your credit score.")
}

if (creditScore < 600){
    intrest = .01;                                    //Intrest rate of %12
    console.log("Your intrest rate will be %12.");      //Print interest rate to console

}else if (creditScore < 700){
    intrest = .006666667;                             //Intrest rate of %8
    console.log("Your intrest rate will be %8.");       //Print interest rate to console

}else{
    intrest = .00375;                                 //Intrest rate of %4.5
    console.log("Your intrest rate will be %4.5.");     //Print interest rate to console
}

//Enter the down payment
downPayment = Number(prompt("Enter the amount of the down payment."));
console.log("You entered " + downPayment + " for your down payment.")

//Enter the amount of the loan
principle = Number(prompt("Enter the amount for mortgage loan for your home."));
//Check to ensure the user entered amount
if (principle === 0){
    principle = Number(prompt("Please enter the amount for the mortgage loan for your home."))
}

//This decides for years or months
typePayments = confirm("Click \"OK\" for years or click \"Cancel\" to enter months.");           //Confirm the type of payment

if (typePayments === true){
    yearsOfLoan = Number(prompt("Enter the amount of years of the loan."));     //Number of years for term of loan
        //Check to ensure the user entered amount
        if (yearsOfLoan === 0){
            yearsOfLoan = Number(prompt("Please enter the total number of years of the loan."))
        }
    monthlyPayment = yearsOfLoan * 12;
    console.log("You will make a total of " + monthlyPayment + " monthly payments.");
}else{
    monthlyPayment = prompt("Enter the number of monthly payments you will be making.");
        //Check to ensure the user entered amount
        if (monthlyPayment === ""){
            monthlyPayment = prompt("Please enter the number of monthly payments you will be making.")
        }
    monthlyPayment = Number(monthlyPayment);
    console.log("You entered that you will be making " + monthlyPayment + " monthly payments.")
}

//Equations

principle = principle - downPayment;
intrestCompounded = intrest + 1;
payment = principle*[intrest*(Math.pow(intrestCompounded,monthlyPayment))]/[Math.pow(intrestCompounded,monthlyPayment)-1];

//Output
payment = payment.toFixed(2);
console.log ("Your monthly payment will be " + payment);

//Test