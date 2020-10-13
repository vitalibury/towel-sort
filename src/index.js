
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return []
    }
    const newArr = []
    matrix.forEach((item, i) => {
      if (i % 2 === 0) {
        for (let i = 0; i < item.length; i ++) {
          newArr.push(item[i])
        }
      } else {
        for (let i = item.length - 1; i >= 0; i--) {
          newArr.push(item[i])
        }
      }
    })
    return newArr;
}
