// Given a list of numbers (like prices) find the min and max
// This first approach tries to solve the issues by comparing each number
// This generated a quadratic time and in big-O notation is On2
const values = [34, 89, 77, 61, 388, 73, 9, 3];
let min = values[0];
let max = values[0];

const minMax = (element) => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (i === j) continue;
      if (values[j] < min) {
        min = values[j];
      }
      if (values[j] > max) {
        max = values[j];
      }
    }
  }
  element.addEventListener("click", () => {
    console.log(`Min: ${min}, Max: ${max}`);
  });
};

export default minMax;
