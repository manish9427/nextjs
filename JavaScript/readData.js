const fs = require('fs');

// Read the file synchronously
const rawData = fs.readFileSync('data.json', 'utf-8');

// Parse the JSON
const data = JSON.parse(rawData);

// Display the data
data.forEach(item => {
  console.log(`ID: ${item.id}, Title: ${item.title}`);
});


const now = new Date();

const date = now.toLocaleDateString();   // e.g. "12/9/2025"
const time = now.toLocaleTimeString();   // e.g. "6:39:00 PM"

console.log("Date:", date);
console.log("Time:", time);

