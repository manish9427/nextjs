const arr = [
    { id: 1, name: 'John', age: 28, city: 'New York' },
    { id: 2, name: 'Jane', age: 22, city: 'Los Angeles' },
    { id: 3, name: 'Mike', age: 32, city: 'Chicago' },
    { id: 4, name: 'Emily', age: 25, city: 'New York' },
    { id: 5, name: 'David', age: 30, city: 'Los Angeles' }
]

const name = arr.filter(item=>item.age>25 &&  item.city === 'Los Angeles').map(person => person["name"]);
console.log(name)

