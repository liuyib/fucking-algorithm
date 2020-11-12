var maxChunksToSorted = function (arr) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);

    if (max === i) {
      count++;
    }
  }

  return count;
};

console.log(maxChunksToSorted([1, 0, 2, 3, 4]), 4);
console.log(maxChunksToSorted([0, 2, 1]), 2);
