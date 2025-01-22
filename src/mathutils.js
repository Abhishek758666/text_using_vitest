export const factorial = (n) => {
  if (n < 0) throw new Error("cannot find factorial of -ve number");
  if (n === 0) 1;
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

export const gcd = (a, b) => {};
