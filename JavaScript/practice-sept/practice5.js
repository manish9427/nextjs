const arr = [1,2,3,3,3,2,3]
const val = arr.filter((item)=>item!==2)
console.log(val)


console.log(obj)
console.log(obj.age,obj.name)
console.log({ age: obj.age, name: obj.name });
console.log({ ...obj });
const { age, name } = obj;
console.log({ age, name });