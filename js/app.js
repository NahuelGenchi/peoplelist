const firstName = document.querySelector("#firstName"),
lastName = document.querySelector("#lastName"),
addPersonButton = document.querySelector("#addPersonButton");

const peopleList = document.querySelector("#peopleList");

addPersonButton.addEventListener("click", addPerson);

let peopleArray = [];
let i = 0;

class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = i;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
};

function addPersonToList(fullName) {
    peopleList.innerHTML += `<li>${fullName}</li>`;
};

function addPerson() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    for (let y = 0; y < peopleArray.length; y++) {
        if (peopleArray[y].firstName == firstNameValue && peopleArray[y].lastName == lastNameValue) {
            firstName.value = "";
            lastName.value = "";
            return alert("Person already created!");
        };
    };
    peopleArray.push(i);
    peopleArray[i] = new person (firstNameValue, lastNameValue);
    let arrayFullName = peopleArray[i].fullName;
    addPersonToList(arrayFullName);
    i++;
    firstName.value = "";
    lastName.value = "";
};