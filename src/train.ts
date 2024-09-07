// H2-TASK
function getDigits(a: string): string {
  let numbers: string[] = [];
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(parseInt(a[i]))) {
      numbers.push(a[i]);
    }
  }
  return numbers.join("");
}

// H-TASK
function getPositive(a: number[]): string {
  const positives = a.filter((num) => num > 0);
  return positives.join("");
}




console.log(getPositive([1, -4, 2, 1]));
