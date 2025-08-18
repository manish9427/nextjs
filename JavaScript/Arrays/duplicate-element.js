const arr = [1, 2, 3, 4, 5, 1, 2, 3];

const findDuplicateElements = () => {
    let freq = {}; // Object to store the frequency of each element
    // Count the frequency of each element
    arr.forEach((item) => {
        freq[item] = (freq[item] || 0) + 1; // Increment the count or initialize to 1
    });

    let duplicates = []; // Array to store the duplicate elements
    // Find the duplicate elements
    for (const key in freq) {
        if (freq[key] > 1) {
            duplicates.push(parseInt(key)); // Add the duplicate to the duplicates array
        }
    }

    return duplicates;
};

const ans = findDuplicateElements();
console.log(ans); // Output: [1, 2, 3]

// ------------------------------------------------------Using Map for better performance

const freqMap = new Map();

// Count frequencies
arr.forEach(item => {
  freqMap.set(item, (freqMap.get(item) || 0) + 1);
});

// Print items that appear only once
for (const [key, count] of freqMap.entries()) {
  if (count > 1) {
    console.log(key); // key retains original type
  }
}
