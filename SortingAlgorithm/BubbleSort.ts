let arra = [1, 12, 3, 40, 9];

function bubbleSort(arr: any) {
  console.log(arra, "ara");

  let i: number, j: number;
  let endIndex = arr.length - 1;

  for (i = 0; i <= endIndex - 1; i++) {
    for (j = 0; j <= endIndex - (1 + i); j++) {
      let temp = Math.max(arra[j], arra[j + 1]);
      arra[j] = Math.min(arra[j], arra[j + 1]);
      arra[j + 1] = temp;
      console.log(arra[j], arra[j + 1]);
    }
  }

bubbleSort(arra);

console.log(arra);
