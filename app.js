// console.log("Har Har Mahadev");
const form = document.querySelector(".students_data");
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearStorage);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formElement = e.target;
  let formData = new FormData(formElement);
   let formObj = Object.fromEntries(formData.entries());
   handleLocalStorage(formObj);
      alert("DATA SUBMITED");   
      setBackToDefault();
});
function handleLocalStorage(data) {
    let items = getLocalStorage();
    let existingIndex = items.findIndex((item) => isEqual(item, data));
    if(existingIndex == -1){
        items.push(data);
         alert("data is pushed");
    }
    else{
        alert("data is already present");
    }
    localStorage.setItem("data", JSON.stringify(items));
   }
function getLocalStorage(){
   return (localStorage.getItem("data")) ? (JSON.parse(localStorage.getItem("data"))) : [];
}
function isEqual(item, data){
    return item.rollNo === data.rollNo;
}
function clearStorage(){
    alert("Local Storage cleared!"); 
    localStorage.clear();
}

function setBackToDefault(){
    const inputContainer1 = document.querySelectorAll(".col  input");
    inputContainer1.forEach((item) => item.value = "");
    const inputContainer2 = document.querySelectorAll(".subjects_name input");
    for(let i = 0; i < inputContainer2.length; i++){
        if(inputContainer2[i].value == "english"){
            continue;
       }
       if(inputContainer2[i].value == "physics"){
            continue;
       }
       if(inputContainer2[i].value == "chemistry"){
             continue;
       }
       if(inputContainer2[i].value == "E.V.S"){
             continue;
       }
       if(inputContainer2[i].value == "phe"){
            continue;
       }
       if(inputContainer2[i].value == "Attendance"){
            continue;
       }
      inputContainer2[i].value = "";
   }
   const inputContainer3 = document.querySelectorAll(".obtained_marks > input");
    inputContainer3.forEach((item) => {
          item.value = "";
    });
   }

