// # TITLE: SUM OF ODD NUMBERS
// # DESCRIPTION:
// # Given the triangle of consecutive odd numbers:
// #              1
// #           3     5
// #        7     9    11
// #    13    15    17    19
// # 21    23    25    27    29
// # Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// # INPUT --> OUTPUT
// # 1 -->  1
// # 2 --> 3 + 5 = 8





const sumRow = idx => {
  const numElem = 2 * idx - 1;
  const listElem = [];

  for (let i = 0; i < numElem; i++) {
    const currentElem = 2 * i + 1;
    listElem.push(currentElem);
  }

  let sum = 0;
  for (let j = 0; j < listElem.length; j++) {
    sum += listElem[j];
  }

  return sum;
};

