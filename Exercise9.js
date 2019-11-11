function checkAB(num) {
    // you can only write your code here!

    var posisiA = []
    var posisiB = []
    for (var i = 0; i < num.length; i++) {
        if ( num[i] === 'a') {
            posisiA.push(i)
        } else if ( num[i] === 'b') {
            posisiB.push(i)
        }
    }

    if (posisiA.length === 0) {
        posisiA.push(0)
    } else if (posisiB.length === 0) {
        posisiB.push(0)
    } else if (posisiA === 1) { 
        posisiA[0]
    }

    var selisih = []
    for (var i = 0; i < posisiA.length; i++) {
        for (var j =0; j < posisiB.length; j++) {
            if (posisiA[i]-posisiB[j] == 4 || posisiA[i] - posisiB[j] == -4) {
                selisih.push(3)
            }      
        }
    } 
   
    if (selisih[0] === 3) {
        return true
    } else {
        return false
    }

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false