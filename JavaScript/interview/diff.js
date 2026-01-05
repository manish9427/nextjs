const temps = [
  { min: 20, max: 30 },
  { min: 22, max: 35 },
  { min: 25, max: 28 },
  { min: 18, max: 40 },
];

let minDiff = null
let maxDiff = null

for (let i = 0; i<temps.length; i++) {
  const diff = temps[i].max - temps[i].min;

  if (maxDiff === null && minDiff === null) {
    maxDiff = diff;
    minDiff = diff;
  }
  if (diff > maxDiff) {
    maxDiff = diff
  }

  if(diff<minDiff){
    minDiff = diff
  }
}

console.log("min diff", minDiff)
console.log("max diff", maxDiff)
