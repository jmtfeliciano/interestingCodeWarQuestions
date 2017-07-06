//we will pass strings 'a' and 'b' and expect their sum also in string format but not in scientific notation
//for example, sumStrings("9", "10") should return "19"
//this code is necessary when we are required to add big numbers over 10^20.  Javascript will force 
//the scientific notation for numbers over 10^20 so this code avoids that scientific notation debacle

function sumStrings(a,b) { 
  var numbersToAdd = [];

  numbersToAdd.push(a.split("").reverse());
  numbersToAdd.push(b.split("").reverse());
  
  //is to make index 1 to make the longest one!
  if(numbersToAdd[0].length > numbersToAdd[1].length){
    var temp = numbersToAdd[1];
    numbersToAdd[1] = numbersToAdd[0];
    numbersToAdd[0] = temp; 
  }
  
  numbersToAdd[1].push("0");
  var finalString = "";
  
  function addNumbers(num1,num2,remain){
    var tempSum = remain;
    
    if(num1 !== undefined){
      tempSum += Number(num1);
    }
    
    if(num2 !== undefined){
      tempSum += Number(num2);
    }
    
    return tempSum ;
  } //returns sum
 
  var remainder = 0;
  for(var i=0;i<numbersToAdd[1].length;i++){
  
    if(numbersToAdd[0][i] !== undefined || numbersToAdd[1][i] !== undefined){
      var tempSum = addNumbers(numbersToAdd[0][i],numbersToAdd[1][i],remainder)
    }
    
    if(tempSum < 10){
      finalString += String(tempSum);
      remainder = 0;
    }else{
      remainder = 1;
      finalString += String(tempSum-10);
    }
  }
  
  var reversedString = finalString.split("").reverse().join("");
  
  while(reversedString.charAt(0) === "0"){
    reversedString = reversedString.slice(1);
  }
  
  
  return reversedString;
  
  
}
