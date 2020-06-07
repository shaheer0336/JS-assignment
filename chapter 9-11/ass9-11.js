document.write ("ASSIGNMENT 5 </br></br></br>");
//  var city =prompt("enter city name ");
//  if(city === "karachi"){
//      alert("Welcome to city of lights");
//  }
//  else 
//  {
//      alert("karachi aao bus");
//  }

// var gender = prompt("enter your gender");
// if (gender === "male"){
//     alert("good morning sir")
// }
// else{
//     alert("good morning ma'm")
// }


// var signal = prompt("road traffic signal");
// if (signal === "red"){
//     alert("Must stop")
// }
// else if (signal === "yellow"){
//     alert("ready to move");
// }
// else if (signal ==="green"){
//     alert("move now");
// }
// else{
//     alert("Oops!!! this doesn't match to traffic signal");
// }


// var fuel = prompt("put down remaining fuel")
// if (fuel < "0.25l"){
//     alert("kindly fillup your fuel")
// }
// else{
//     alert("keep running the car");
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// var obtmarks =prompt ("enter obtained marks");
//  var total =1100;
//  var per = obtmarks /total * 100;
//  if ( per >80 ){
//      alert("A-1 grade");
//  }
//  else if (per > 70 && per <80){
//      alert("A grade")
//  }
// else if (per >60 && per <70){
//     alert("B grade");
// }
// else if (per >50 && per <60){
//     alert ("C grade");
// }
// // else {
// //     alert ("better luck for next time")
// // }

// document.write("TOTAL MARKS  :" + total +"</br></br>");
// document.write("OBTIANED MARKS  :" + obtmarks +"</br></br>");
// document.write("PERCENTAGE  :" + per +"</br></br>");
// document.write("GRADE   :"  + total +"</br></br>");


// var secret = 5;
// var snum = prompt("guess the secret number");
// if (secret === snum){
//     alert("BINGO!! Correct answer")
// }
// else if (snum === ++secret && snum === --secret ){
//     alert("Ohh!! close enough")
// }
// else {
//     alert("Oops !!! sorry");
// }

// var check =prompt("down any number")
// if (check % 2 ===0){
//     alert("even number")
// }
// else {
//     alert("odd number");
// }


// var temp =prompt("enter temperature");
// if (temp >40 ){
//     alert ("its too hot");
// }
// else if (temp >30 ){
//     alert("the whether today is normal");
// }
// else if (temp > 20){
//     alert("weather is cool")
// }
// else {
//     alert("OMG");
// }


var n1= prompt("enter number1");
var n2 =prompt("enter number2");
var op =prompt ("enter operator");

if (op === "+"){
    var cal =n1 + n2;
    document.write("sum " + cal);
}
else if  (op ==="-"){
    var cal =n1 - n2;
    document.write("sub " + cal);
}
else if (op === "*"){
    var mul =n1 * n2;
    document.write("mul " + cal);
}
else if (op === "/"){
    var mod =n1 / n2;
    document.write("div " + cal);

}
else{
    alert ("sorry")
}
