 // duplicate Array // chepeast
 
 Array.prototype.duplicate = function(){
   
   return arr.concat(arr.slice(0));
 }
 
 var arr = [1,2,3,4,5,6,7,'hello',true];
 
arr.duplicate();