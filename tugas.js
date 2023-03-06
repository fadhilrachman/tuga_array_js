const arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

function multidimensi_array() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    var row = [];
    for (var j = 0; j < 3; j++) {
      row.push(arr2[i][j]); // ['x']
    }
    arr.push(row);
  }
  return arr;
}

console.log(multidimensi_array());
