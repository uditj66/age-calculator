let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", calculate);

function calculate() {
  setInterval(() => {
    //fetch birthdate from datebox
    let birthdate = new Date(document.getElementById("birthdate").value);
    //current date
    let now = new Date();
    // age in ms
    let ageinms = now.getTime() - birthdate.getTime();

    let ageins = ageinms / 1000;
    let ageinmin = ageins/ 60;
    let ageinhours = ageinmin / 60;
    let ageindays = ageinhours / 24;
    let ageinmonths = ageindays / 30.4375;
    let ageinyears = ageinmonths / 12;
    

    document.querySelector("#years").innerHTML = Math.floor(ageinyears);
    document.querySelector("#months").innerHTML = Math.floor(ageinmonths % 12);
    document.querySelector("#days").innerHTML = Math.floor(ageindays % 30.4375);
    document.querySelector("#hours").innerHTML = Math.floor(ageinhours % 24);
    document.querySelector("#min").innerHTML = Math.floor(ageinmin % 60);
    document.querySelector("#sec").innerHTML = Math.floor(ageins % 60);
  }, 1000);
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", reload);
function reload() {
  window.location.reload();
}
