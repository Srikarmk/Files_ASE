function selectionSortDescending(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      // Swap the elements
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
}

const numbers = [5, 2, 9, 1, 5, 6];

selectionSortDescending(numbers);

console.log(numbers); // [9, 6, 5, 5, 2, 1]
