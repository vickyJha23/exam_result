// console.log("Har Har Mahadev");
const form = document.querySelector(".students_data");
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearStorage);
const nextPageBtn = document.querySelector(".next");
nextPageBtn.addEventListener("click", handleMovementNextPage);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formElement = e.target;
  let formData = new FormData(formElement);
   let formObj = Object.fromEntries(formData.entries());
   handleLocalStorage(formObj);
//    setBackToDefault();
});
function handleLocalStorage(data) {
    let items = getLocalStorage();
    let existingIndex = items.findIndex((item) => isEqual(item, data));
    if(existingIndex == -1){
        items.push(data);
        console.log("data is pushed");
    }
    else{
        console.log("data is already present");
    }
    localStorage.setItem("data", JSON.stringify(items));
   }
function getLocalStorage(){
   return (localStorage.getItem("data")) ? (JSON.parse(localStorage.getItem("data"))) : [];
}
function isEqual(item, data){
    console.log(item.StudentName === data.StudentName);
    return item.StudentName === data.StudentName;
}
function clearStorage(){
    alert("Local Storage cleared!"); 
    localStorage.clear();
}
function handleMovementNextPage() {
    console.log("getting clicked");
     window.location.href = `http://127.0.0.1:5500/exam_result/result.html`;
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
}

