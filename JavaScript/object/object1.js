const obj = { name: "abc", age: 20, city: "xyz",isAdmin:true };
console.log(obj.name); // abc
console.log(obj["age"]) // 20

const key = "age"
console.log(obj[key]) // 20

const {name,age,city} = obj;
console.log(name,age,city); // abc 20 xyz

const keys = Object.keys(obj);
console.log("Keys:", keys); // ["name", "age", "city", "isAdmin"]

const values = Object.values(obj); 
console.log("Values:", values); // ["abc", 20, "xyz", true]

const entries = Object.entries(obj); 
console.log("Entries:", entries); // [["name", "abc"], ["age", 20], ["city", "xyz"], ["isAdmin", true]]

const hasName = obj.hasOwnProperty("name"); 
console.log("Has name property:", hasName); // true

obj.name = "Manish"         // Update
obj.city = "Bengaluru";     // Add
obj.age = 25;               // Update
delete obj.isAdmin;         // Delete

for (let key in obj) {
  console.log(key, obj[key]); // name Manish, age 25, city Bengaluru
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`); // name: Manish, age: 25, city: Bengaluru
});
