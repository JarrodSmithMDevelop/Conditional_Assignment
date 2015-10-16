/**
 * Jarrod Smith
 * 10/8/15
 * SDI 1510 Section 1
 * Conditional Assignment
 */


//Variable

var creditScore;                //Users credit score
var principle;                  //Amount of the loan
var interest;                    //The interest rate on the loan
var monthlyPayment;             //Number of monthly payments
var typePayments = true;        //If this is true you will input years of the loan, if false then you will enter months
var yearsOfLoan;                //How many year term the loan is.
var payment;                    //The amount of the monthly payment
var interestCompounded;          //Part of the compounding of intrest
var downPayment = 0;            //The amount of the down payment
//Inputs

creditScore = Number(prompt("Enter your credit score."));       //Enter the credit score

//Check to ensure user has entered a value
if (creditScore === 0){
    creditScore = prompt("Please enter your credit score.")
}

if (creditScore < 600){                                 //If your score is less then 600
    interest = .01;                                      //Intrest rate of %12
    console.log("Your intrest rate will be set at %12.");      //Print interest rate to console

}else if (creditScore < 700){                           //if your score is less then 700
    interest = .006666667;                               //Intrest rate of %8
    console.log("Your intrest rate will be set at %8.");       //Print interest rate to console

}else{                                                  //If your score is anything over 700
    interest = .00375;                                   //Intrest rate of %4.5
    console.log("Your intrest rate will be set at %4.5.");     //Print interest rate to console
}

//Enter the down payment
downPayment = Number(prompt("Enter the amount of the down payment."));
console.log("You entered $" + downPayment + " for your down payment.");

//Enter the amount of the loan
principle = Number(prompt("Enter the amount for mortgage loan for your home."));

//Check to ensure the user entered amount
if (principle === 0){
    principle = Number(prompt("Please enter the amount for the mortgage loan for your home."))
}

//This decides for years or months
typePayments = confirm("Click \"OK\" for years or click \"Cancel\" to enter months.");           //Confirm the type of payment

if (typePayments === true){
    yearsOfLoan = Number(prompt("Enter the amount of years of the loan."));                     //Number of years for term of loan
        //Check to ensure the user entered amount
        if (yearsOfLoan === 0){
            yearsOfLoan = Number(prompt("Please enter the total number of years of the loan."))
        }
    monthlyPayment = yearsOfLoan * 12;                                                          //Converts years to months
    console.log("You will make a total of " + monthlyPayment + " monthly payments.");
}else{
    monthlyPayment = prompt("Enter the number of monthly payments you will be making.");        //Enter number of monthly payments

        //Check to ensure the user entered amount
        if (monthlyPayment === ""){
            monthlyPayment = prompt("Please enter the number of monthly payments you will be making.")
        }
    monthlyPayment = Number(monthlyPayment);                                                    //Converts string input into a number.
    console.log("You entered that you will be making " + monthlyPayment + " monthly payments.")
}

//Equations

principle = principle - downPayment;        //Principle after down payment
interestCompounded = interest + 1;
payment = principle*[interest*(Math.pow(interestCompounded,monthlyPayment))]/[Math.pow(interestCompounded,monthlyPayment)-1];  //Equation to figure payment

//Output
payment = payment.toFixed(2);                                                                   //This fixs the decimal to 2 places
console.log ("Your monthly payment will be $" + payment);                                        //Prints your total monthly payment
