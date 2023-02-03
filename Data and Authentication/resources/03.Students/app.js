const url = 'http://localhost:3030/jsonstore/collections/students';
async function solve() {
  
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data)
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitInfo)

    const resultElement = document.querySelector('#results tbody');
    Object.values(data).forEach(x => {
        //console.log(x.grade);
        let tdElement = document.createElement('tr');

        let thFirstNameElement = document.createElement('th');
        thFirstNameElement.textContent = x.firstName;
        let thLastNameElement = document.createElement('th');
        thLastNameElement.textContent = x.lastName;
        let thFacNumElement = document.createElement('th');
        thFacNumElement.textContent = Number(x.facultyNumber);
        let thGradeElement = document.createElement('th');
        thGradeElement.textContent = Number(x.grade);

        tdElement.appendChild(thFirstNameElement);
        tdElement.appendChild(thLastNameElement);
        tdElement.appendChild(thFacNumElement);
        tdElement.appendChild(thGradeElement);

        resultElement.appendChild(tdElement);
    })
}
async function submitInfo(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    //console.log(inputs[0].value);
    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    let facNum = inputs[2].value;
    let grade = inputs[3].value;

    if (firstName !== NaN && lastName !== NaN && facNum !== NaN && grade !== NaN) {

            const responce = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName:firstName, lastName:lastName, facultyNumber:facNum, grade:grade })
            })
        
    }
    solve()
}
solve()