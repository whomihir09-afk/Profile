const button = document.getElementById("calulatebtn");
const birthdateInp = document.getElementById("birthdate");
const result = document.getElementById("result");

const calulateAge = () => {
    let birthdate = birthdateInp.value;

    let birthdateObj = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthdateObj.getFullYear();
    let MonthDiff = today.getMonth() - birthdateObj.getMonth();
    let DateDiff = today.getDate() - birthdateObj.getDate();

    if(MonthDiff < 0 || (MonthDiff === 0    && DateDiff === 0))
    {
        age--;
    }

    result.innerText = `You are ${age} years old`;
}

button.addEventListener("click" , calulateAge);