const obj = { name: "abc", age: 20, city: "xyz",isAdmin:true };
const {name,age,city} = obj;
console.log(name,age,city);

const keys = Object.keys(obj);     
const values = Object.values(obj); 
const entries = Object.entries(obj); 
console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

const hasName = obj.hasOwnProperty("name"); 
console.log("Has name property:", hasName);

console.log(obj.name);
console.log(obj["isAdmin"])

const key = "age"
console.log(obj[key])

obj.city = "Bengaluru";     // Add
obj.age = 31;               // Update
delete obj.isAdmin;         // Delete

for (let key in obj) {
  console.log(key, obj[key]);
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
