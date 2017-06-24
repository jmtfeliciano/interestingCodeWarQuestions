//You have to create a function that takes a positive integer number 
//and returns the next bigger number formed by the same digits:

function biggest(n){
  var array1 = n.toString().split("");

  var array2 = array1.slice(); 
  // have to use slice because array2 = array1 will pass the reference 
  // and any modification to array2 would be reflected in array1

  array2.sort( (a,b)=>b-a );

  if(JSON.stringify(array1) === JSON.stringify(array2) ){
	  return -1;
  }else{
	  return Number(array2.join(""));
  }
}
