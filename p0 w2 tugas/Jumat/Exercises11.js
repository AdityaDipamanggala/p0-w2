function balikKata(kata) {
    var kataTerbalik = '';
    var panjangKata = kata.length - 1;
    for (panjangKata; panjangKata >= 0 ; panjangKata --){kataTerbalik += kata[panjangKata] }
    return kataTerbalik
  }
  
  
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm')); 
  console.log(balikKata('Coding is my hobby')); 
  console.log(balikKata('Super')); 