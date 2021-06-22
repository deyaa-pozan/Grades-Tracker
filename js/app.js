/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict'
let form = document.getElementById('form');
let table = document.getElementById('table1');
let arrAllLocal = [];
let tdAdd = ``
let theader = `<thead>
<tr>
<th>Student Name</th>
<th>Student Grade</th>
<th>Course</th>
<th>Status</th>
</tr></thead>`
addToTable(theader);
if (localStorage.getItem('Grade') !== null) {
    arrAllLocal = JSON.parse(localStorage.getItem('Grade'))
    allRender()
}


function Grades(name, course) {
    this.name = name;
    this.course = course;
    this.grades = Math.floor(Math.random() * 101);
    if (this.grades < 50) {
        this.status = 'Fail'
    } else {
        this.status = 'Success'
    }

    arrAllLocal.push(this)
    savingLocal()

}
Grades.prototype.render = function() {
    let td = `
    <tr>
    <td>${this.name}</td>
    <td>${this.grades}</td>
    <td>${this.course}</td>
    <td>${this.status}</td>
    </tr>`
    addToTable(td);
}

function allRender() {

    for (let i = 0; i < arrAllLocal.length; i++) {
        tdAdd += `<tr>
    <td>${arrAllLocal[i].name}</td>
    <td>${arrAllLocal[i].grades}</td>
    <td>${arrAllLocal[i].course}</td>
    <td>${arrAllLocal[i].status}</td>
    </tr>`

    }
    addToTable(tdAdd);
}

function savingLocal() {
    let local = JSON.stringify(arrAllLocal)
    localStorage.setItem('Grade', local)
}


function logSubmit(event) {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let newGrades = new Grades(name, course)
    newGrades.render()
    event.preventDefault();
}

function addToTable(text) {

    table.innerHTML += text;

}



form.addEventListener('submit', logSubmit);