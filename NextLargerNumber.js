//find the next possible larger number that can be done through rearrangement

function nextBigger(n){
  var array1 = n.toString().split("");
  var array2 = array1.slice();
  array2.sort((a,b)=>b-a);
  if(JSON.stringify(array1)===JSON.stringify(array2)){
    return -1;
  }
  var array1 = array1.sort(); // I will use this later for comparison
  
  
  function hasAll(number){
    var arrayy = number.toString().split("");
    arrayy.sort();
    if( JSON.stringify(arrayy) === JSON.stringify(array1) ){
      return true;
    }else{
      return false;
    }
  }
  
  
  var highestNumber = Number(array2.join(""));
  
  for(var i=n+1; i<=highestNumber; i++){
    if(hasAll(i) === true){
      return i;
    }
  }
  

}
