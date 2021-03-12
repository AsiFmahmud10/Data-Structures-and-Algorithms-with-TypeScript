function binary_search(num: number, array: number[]): number | string {
  let headPointer = 0,
    tailPoiner = array.length - 1;

  let mid: number = -1;

  while (headPointer <= tailPoiner) {
    mid = Math.floor((headPointer + tailPoiner) / 2);

    if (array[mid] == num) {
      return mid;
    } else if (num < array[mid]) {
      tailPoiner = mid - 1;
    } else {
      headPointer = mid + 1;
    }
  }

  return "The number is not in the array";
}

let array = [1, 3, 6, 8, 10, 12];

let index = binary_search(8, array);

console.log(index);
