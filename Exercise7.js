function urutkanAbjad(str) {
    // you can only write your code here!
    // baca str
    // buat urutan berupa arr
    //  loop setiap huruf pada str ke arr
    //  return dulu
    //  bubble sort urutan
    // loop urutan kemudian masukkan kedalam string
    //  return kembali
    
    var urutan = []
    for (var i = 0; i < str.length; i++) {
        urutan.push(str[i])
    }
    
    var status = false 
    while (!status) {
        status = true 
        for ( var i = 1; i < urutan.length; i++) {
            if (urutan[i-1][0] > urutan[i][0]) {
                status = false
                var tmp = urutan[i-1]
                urutan[i-1] = urutan[i]
                urutan[i] = tmp
            }
            
        }
    }

    var hasil = ''
    for (var i = 0; i < urutan.length; i++) {
        hasil += urutan[i]
    }

    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'