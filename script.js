const students=[];

const tableBody=document.querySelector("#studentsTable tbobdy");

document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const LastName=document.getElementById("LastName").value.trim();
    const grade=document.getElementById("grade").value.trim();

    if(grade <1 || grade >7){
    alert("Errror Datos Incorrectos")
    return
    }

    //guardar datos en el Array

    const students=(name,LastName,grade)
    students.push(students);
     addStudentToTable(student)
    //console.log(students)

    this.reset();

});

function addStudentToTable(student){
    const row=document.createElement("tr")
    row.innerHTML=
    `<td>${student.name}</td>
     <td>${student.LastName}</td>
    <td>${student.grade.tofixed(1)}</td>}`;
    tableBody.appendChild(row);
}