function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var perjalanan = []
    for ( var i = 0; i < arrPenumpang.length; i++) {
        var data = {}
        data.penumpang = arrPenumpang[i][0]
        for ( var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {                
                data.naikDari = rute[j]
                var bayar = 0
                for (var k = j; k < rute.length; k++) {
                    if (arrPenumpang[i][2] === rute[k]) {
                        data.tujuan = rute[k]
                        data.bayar = bayar
                        perjalanan.push(data)
                    } else {
                        bayar += 2000
                    }                    
                }
            }
        }
    }
  return perjalanan
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]