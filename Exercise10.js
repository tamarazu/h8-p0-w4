function changeMe(arr) {
    // you can only write your code here!
    var year = new Date().getFullYear()
    var num = 1
    var biodata = {}
    for (var i = 0; i < arr.length; i++) {
        biodata.firstName = arr[i][0]
        biodata.lastName = arr[i][1]
        biodata.gender = arr[i][2]
        if (arr[i][3] < year) {
            biodata.age = String(year - arr[i][3])
        } else {
            biodata.age = 'Invalid Birth Year'
        }
        console.log(num +`.`+ arr[i][0] + ` ` + arr[i][1])
        num++
        console.log(biodata)
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'], ['Tamara','Zulaika', 'Female', 1996]]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""