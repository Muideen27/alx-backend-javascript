interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Muideen",
    lastName: "Ilori",
    age: 30,
    location: "Lagos",
}

const student2: Student = {
    firstName: "Snethember",
    lastName: "Mavilakazi",
    age: 19,
    location: "SouthAfrica",    
}

const studentList: Student [] = [student1, student2];

const table = document.getElementById("studentTable");
const tbody = table.querySelector("tbody");

studentList.forEach((student) => {
    const row = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    tbody.appendChild(row);     
});

