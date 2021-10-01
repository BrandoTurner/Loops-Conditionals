/***1) Given the array,
Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
Loop through the array to find the longest word by how many letters each string contains.
Which other variables will you be needing?
            2) Print the length of the longest word to the console.
3) Print the longest word to the console.  
 4) Now what if the array was 
Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
Since all the words are in one string together, how would you solve this? 


Write a function that returns elements on odd positions in a list. 

Function factorial(n) {
}
Compute the factorial of any given number.

Conditional Practice
Write an if statement and determine a condition where:
If mpg is less than or equal to 10, console “gas guzzler”
If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
If mpg is between 17-20, console “ it’s palpable”
If mpg is between 21-29, console “ Atmosphere smiles at your decision”
If mpg is between 30-35, console “ Not many gas stops will be taken”
If mpg is above 35 console “ The fish of the sea smile at your conservation”
If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
After testing each one, change the mpg variable to ensure it is good. 
*/
function lunch(){
let lunchArray = [ "Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let longest = 0;
let long = "";
for ( let i = 0; i < lunchArray.length; i++){
    if (lunchArray[i].length > longest){
        longest = lunchArray[i].length;
        long = lunchArray[i];
        
    }
}
console.log(longest);
return long;
}
console.log(lunch());

function lunch2(){
    let lunchArray = ["Burger Salad Lasagna Sushi Meatloaf"];
    let arr = lunchArray[0].split(" ");
    let longest = 0;
let long = "";
for ( let i = 0; i < arr.length; i++){
    if (arr[i].length > longest){
        longest = arr[i].length;
        long = arr[i];
    }

}
    console.log(longest)
    return long[i];
}

console.log(lunch2());

function isOdd(arr){
    for (let i = 0; i < arr.length; i++){
        if( i % 2 != 0){
            console.log(arr[i];
            }
                else{
                    return false;
        }
    }
}
console.log(odd([0,1,2,3,4,5,6,7]))