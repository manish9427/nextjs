const fibonacci = (n) => {
  const arr = [n];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};
let n = 5;
const ans = fibonacci(n);
console.log(ans);

const duplicate = (arr) => {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const duplicates = [];
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
};

console.log(duplicate(ans));




