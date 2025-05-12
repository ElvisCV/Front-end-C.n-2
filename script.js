const students=[];

const tableBody=document.querySelector("#studentsTable tbobdy");
const averageDIV=document.getElementById("average")

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
    const row=document.createElement("tr");
    row.innerHTML=
    `<td>${student.name}</td>
     <td>${student.LastName}</td>
    <td>${student.grade(1)}</td>}`;
    tableBody.appendChild(row);
}

function calcularPromedio{}{
    if(students, length===0){
        averageDIV.textContent="Promedio General del Curso:N/A"
         return;    
    }
    const total=students.reduce((sum,s)=>sum+s.grade,0);
    const average=total/students.length;
    averageDIV.textContent='Promedio General del curso:' $(average.toFixed(2));
}