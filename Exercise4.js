function cariModus(arr) {
    // you can only write your code here!
    var done = false
    while (!done) {
        done = true        
        for ( var i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                done = false
                var tmp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = tmp
            } 
        }
    }
    hasil = []
    index = 0
    for ( var i = 0; i < arr.length; i++) {
        if (hasil.length === 0) {
            hasil.push([arr[i]])
        } else if (hasil[index][0] === arr[i]) {
            hasil[index].push(arr[i])
        } else {
            hasil.push([arr[i]])
            index++
        }
    }
    status = false
    while (!status) {
        status = true
        for (var i = 1; i < hasil.length; i++) {
            if (hasil[i].length > hasil[i-1].length) {
                status = false
                var tmp = hasil[i-1]
                hasil[i-1] = hasil[i]
                hasil[i] = tmp
            } 
        }
    }
    var modus = -1
    if (hasil.length === 1) {
        return modus
    } else if (hasil[0].length === 1) {
        return modus
    } else {
        return hasil[0][0]
    }
}
  
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1