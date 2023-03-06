const arr2 = "abcdefghijklmnopqrstuvwxyz";

function multidimensi_array() {
  var arr = [];
  var k = 0;
  for (var i = 0; i < 3; i++) {
    var row = [];
    for (var j = 0; j < 3; j++) {
      row.push(arr2[k]);
      k++;
    }
    arr.push(row);
  }
  return arr;
}

console.log(multidimensi_array());
