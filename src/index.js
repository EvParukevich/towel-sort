
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newArray = [];

  if (Array.isArray(matrix)) {
      matrix.forEach((underArray, index) => {
          (index % 2 !== 0) ? newArray.push(...underArray.reverse()) :
          newArray.push(...underArray);
      });
      return newArray;
  } else {
      return newArray;
  }
}
