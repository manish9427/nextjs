const arr = [1, 2, 3, 4, 5, 1, 2, 3];

const findDuplicateElements = () => {
    let freq = {}; // Object to store the frequency of each element
    let duplicates = []; // Array to store the duplicate elements

    // Count the frequency of each element
    arr.forEach((item) => {
        freq[item] = (freq[item] || 0) + 1; // Increment the count or initialize to 1
    });

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
