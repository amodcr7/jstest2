












const employees = [
    { name: "Alice", age: 25, department: "HR" }, // j
    { name: "Bob", age: 30, department: "Engineering" }, // key
    { name: "Charlie", age: 22, department: "HR" },
    { name: "David", age: 35, department: "Engineering" },
    { name: "Eve", age: 28, department: "Marketing" }
];

function sortByDepartmentAndAge(employees) {
    for (let i = 1; i < employees.length; i++) {
        let key = employees[i];
        let j = i - 1;        
        while (j >= 0 && (employees[j].department > key.department || 
               (employees[j].department === key.department && employees[j].age > key.age))) {
            employees[j + 1] = employees[j];
            j = j - 1;
        }
        employees[j + 1] = key;
    }
    return employees;
}

console.log(sortByDepartmentAndAge(employees));