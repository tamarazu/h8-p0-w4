function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    var perkalian = [];
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            var pembagi = angka / i
            perkalian.push([`${pembagi}${i}`])
        }
    }
    
    var status = false 
    while (!status) {
        status = true 
        for ( var i = 1; i < perkalian.length; i++) {
            if (perkalian[i][0].length < perkalian[i-1][0].length) {
                status = false 
                var tmp = perkalian[i]
                perkalian[i] = perkalian[i-1]
                perkalian[i-1] = tmp 
            }
        }
    }
    
    return perkalian[0][0].length
  }


  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2