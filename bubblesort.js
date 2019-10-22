const newArray = [7, 6, 5, 9, -3];

function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  for (let j = 0; j < array.length; j++) {
    swap(array);
  }

  return array;
}

function swap(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstEl = array[i];
    const secondEl = array[i + 1];
    if (firstEl > secondEl) {
      const placeHolder = secondEl;
      array[i + 1] = firstEl;
      array[i] = placeHolder;
    }
  }

  return array;
}

bubbleSort(newArray);
