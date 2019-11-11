function cariMedian(arr) {
    // you can only write your code here!
    status = false
    while (status) {
        status = true
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]>arr[i+1]) {
                var tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = arr[i]
            }
        }
    }
    var median = arr[0]
    var jarakTengah = (arr[arr.length-1]-arr[0]) / 2 
        var nilaiTengah = arr[0] + jarakTengah
    for (var j = 0; j < arr[arr.length-1]; j++) {        
        if (median < nilaiTengah) {
            median += 0.5
        } else {
            return median
        }
        }
    }
  
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5