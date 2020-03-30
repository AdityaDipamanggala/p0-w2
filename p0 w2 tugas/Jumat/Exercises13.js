function xo(str) {
   var banyakO = (str.match(/o/g) || []).length;
   var banyakStr = str.length;
   if (banyakO == banyakStr/2){return true}
   else {return false}  }
  
  
  console.log(xo('xoxoxo')); 
  console.log(xo('oxooxo')); 
  console.log(xo('oxo')); 
  console.log(xo('xxxooo')); 
  console.log(xo('xoxooxxo')); 
