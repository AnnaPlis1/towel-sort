
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === []) {
    return []};
  if(matrix === undefined) {
    return []};
  let result = [];
  if(matrix){
      for (let i = 0; i < matrix.length; i++) {
    let answer = matrix[i];
    result = result.concat(i % 2 ? [...answer].reverse() : answer);
  }
  return result;
  }

}