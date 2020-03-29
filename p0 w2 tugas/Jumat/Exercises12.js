function konversiMenit(menit) {
var satuanMenit = Math.trunc(menit/60);
var satuanDetik = Math.round(((menit/60) - satuanMenit)*60);
var satuanMenitStr = String(satuanMenit);
var satuanDetikStr = String (satuanDetik);
if (satuanDetikStr.length === 1){satuanDetikStr = '0' + satuanDetikStr}
return `${satuanMenitStr} : ${satuanDetikStr}`
  }
  
  
  console.log(konversiMenit(63)); 
  console.log(konversiMenit(124)); 
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 