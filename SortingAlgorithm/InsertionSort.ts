function iterative(arra: number[]) {
  let lngth = arra.length - 1;

  for (let i = 1; i <= lngth; i++) {
    let temp = arra[i];

    for (let j = i - 1; j >= 0; j--) {
      if (temp < arra[j]) {
        arra[j + 1] = arra[j];
        arra[j] = temp;
      }
    }
  }
  console.log(arra);
}

let array = [0, 1, 6, 3, 9, 19, 8, 7, 7, 7];

iterative(array);
