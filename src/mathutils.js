export const factorial = (n) => {
  if (n < 0) throw new Error("cannot find factorial of -ve number");
  if (n === 0) 1;
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

export const findGCD = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

export const fibonacciSeries = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
};
