const students = [];
let editingIndex = null;

const tableBody = document.querySelector("#studentsTable tbody");
const averageDiv = document.getElementById("average");
const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores
  const name = document.getElementById("name").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const gradeValue = document.getElementById("grade").value.trim();
  const grade = parseFloat(gradeValue);

  // Mostrar u ocultar mensajes de error
  let valid = true;

  // Validaciones personalizadas
  if (!name) {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  if (!lastName) {
    document.getElementById("lastNameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("lastNameError").style.display = "none";
  }

  if (isNaN(grade) || grade < 1 || grade > 7) {
    document.getElementById("gradeError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("gradeError").style.display = "none";
  }

  if (!valid) return;

  const student = { name, lastName, grade };

  if (editingIndex !== null) {
    students[editingIndex] = student;
    updateTable();
    editingIndex = null;
    form.querySelector("button").textContent = "Guardar Estudiante";
  } else {
    students.push(student);
    addStudentToTable(student, students.length - 1);
  }

  calcularPromedio();
  form.reset();
});

function addStudentToTable(student, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade.toFixed(1)}</td>
    <td><button onclick="editStudent(${index})">Actualizar</button></td>
  `;
  tableBody.appendChild(row);
}

function updateTable() {
  tableBody.innerHTML = "";
  students.forEach((student, index) => addStudentToTable(student, index));
}

function calcularPromedio() {
  if (students.length === 0) {
    averageDiv.textContent = "Promedio General del Curso: N/A";
    return;
  }

  const total = students.reduce((sum, s) => sum + s.grade, 0);
  const average = total / students.length;
  averageDiv.textContent = `Promedio General del Curso: ${average.toFixed(2)}`;
}

window.editStudent = function(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("lastName").value = student.lastName;
  document.getElementById("grade").value = student.grade;
  editingIndex = index;
  form.querySelector("button").textContent = "Actualizar Estudiante";
};
