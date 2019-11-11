function fpb(angka1, angka2) {
    // you can only write your code here!
    // status = false
    var fpb = 1
    var bagi = 2
    var angkaNew1 = angka1
    var angkaNew2 = angka2  
    if (angka1 > angka2) {
        var max = angka1
    } else {
        var max = angka2
    }
    while (bagi < max) {
    if (angkaNew1 % bagi === 0 && angkaNew2 % bagi === 0) {
        fpb *= bagi
        angkaNew1 = angkaNew1 / bagi
        angkaNew2 = angkaNew2 /bagi    
    } else if (angkaNew1 % bagi !== 0 || angkaNew2 % bagi !== 0){
        bagi++
    }        
}
    return fpb
}    


  
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1