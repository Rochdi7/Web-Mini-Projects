let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

var today = new Date();
currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
    var birthDate = new Date(dateOfBirth.value);

    if (isNaN(birthDate.getTime())) {
        Age.innerText = "⚠️ Please enter a valid date in MM/DD/YYYY format.";
        displayAge.style.display = "block";
        return;
    }

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    displayAge.style.display = "block";
    Age.innerHTML = `
        🎉 You are <span style="font-size: 2rem; color: #ffd700;">${age}</span> years old!
    `;
});
