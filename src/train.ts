// H-TASK
function getPositive(a: number[]): string {
  const positives = a.filter((num) => num > 0);
  return positives.join("");
}




console.log(getPositive([1, -4, 2, 1]));
