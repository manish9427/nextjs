const arr = [
    { firstName: "Alice", lastName: "Kumar", age: 30 },
    { firstName: "Bob", lastName: "Smith", age: 25 },
    { firstName: "Charlie", lastName: "Johnson", age: 35 },
    { firstName: "David", lastName: "Williams", age: 28 },
    { firstName: "Eve", lastName: "Brown", age: 22 },
    { firstName: "Frank", lastName: "Jones", age: 40 },
    { firstName: "Grace", lastName: "Garcia", age: 27 },
    { firstName: "Hannah", lastName: "Martinez", age: 32 },
    { firstName: "Ian", lastName: "Davis", age: 29 },
    { firstName: "Jack", lastName: "Rodriguez", age: 31 },
    { firstName: "Kathy", lastName: "Wilson", age: 26 },
    { firstName: "Leo", lastName: "Anderson", age: 33 },
    { firstName: "Mia", lastName: "Thomas", age: 24 },
    { firstName: "Nina", lastName: "Taylor", age: 36 },
    { firstName: "Oscar", lastName: "Moore", age: 38 },
    { firstName: "Paul", lastName: "Jackson", age: 34 }
];

export function getData() {
    return arr.map((item) => {
        return {
            firstName: item.firstName,
            lastName: item.lastName,
            age: item.age
        }
    });
}

function displayData() {
    const data = getData();
    const container = document.createElement('div'); // Create a container element
    container.id = 'data-container'; // Give the container an ID for styling

    data.forEach(person => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`;
        container.appendChild(paragraph);
    });

    document.body.appendChild(container); // Append the container to the body
}

// Call the displayData function after the DOM is loaded
document.addEventListener('DOMContentLoaded', displayData);
