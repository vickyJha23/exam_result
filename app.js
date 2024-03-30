console.log("Har Har Mahadev");
// for student information.........
// const generateMarksheetBtn = document.querySelector(".generate_marksheet");
// const labelStudentName = document.querySelector("#nme");
// const inputStudentName = document.querySelector("#student_name");
// const labelRollno = document.querySelector("#rl_no");
// const inputStudentRollNo = document.querySelector("#student_roll_no");
// const labelFatherName = document.querySelector("#father_name");
// const inputFatherName = document.querySelector("#student_father_name");
// const labelGrNo = document.querySelector("#gr_no");
// const inputGrNo = document.querySelector("#student_gr_no");
// const labelMotherName = document.querySelector("#m_name");
// const inputMotherName = document.querySelector("#student_mother_name");
// const labelClassName = document.querySelector("#class");
// const inputClassName = document.querySelector("#student_class");
// // for subject variables are declare
// const sub1 = document.querySelector("#subject_name_item_input_1");
// const sub2 = document.querySelector("#subject_name_item_input_2");
// const sub3 = document.querySelector("#subject_name_item_input_3");
// const sub4 = document.querySelector("#subject_name_item_input_4");
// const sub5 = document.querySelector("#subject_name_item_input_5");
// const sub6 = document.querySelector("#subject_name_item_input_6");
// const sub7 = document.querySelector("#subject_name_item_input_7");
// const sub8 = document.querySelector("#subject_name_item_input_8");
// // for maximum marks
// const maxMarkItem1 = document.querySelector("#max_item_input_1");
// const maxMarkItem2 = document.querySelector("#max_item_input_2");
// const maxMarkItem3 = document.querySelector("#max_item_input_3");
// const maxMarkItem4 = document.querySelector("#max_item_input_4");
// const maxMarkItem5 = document.querySelector("#max_item_input_5");
// const maxMarkItem6 = document.querySelector("#max_item_input_6");
// const maxMarkItem7 = document.querySelector("#max_item_input_7");
// const maxMarkItem8 = document.querySelector("#max_item_input_8");
// // for passing marks
// const passingMarkItem1 = document.querySelector("#passing_item_input_1");
// const passingMarkItem2 = document.querySelector("#passing_item_input_2");
// const passingMarkItem3 = document.querySelector("#passing_item_input_3");
// const passingMarkItem4 = document.querySelector("#passing_item_input_4");
// const passingMarkItem5 = document.querySelector("#passing_item_input_5");
// const passingMarkItem6 = document.querySelector("#passing_item_input_6");
// const passingMarkItem7 = document.querySelector("#passing_item_input_7");
// const passingMarkItem8 = document.querySelector("#passing_item_input_8");
// // for obtained Marks

// const obtainedMarksItem1 = document.querySelector("#obtained_item-1");
// const obtainedMarksItem2 = document.querySelector("#obtained_item-2");
// const obtainedMarksItem3 = document.querySelector("#obtained_item-3");
// const obtainedMarksItem4 = document.querySelector("#obtained_item-4");
// const obtainedMarksItem5 = document.querySelector("#obtained_item-5");
// const obtainedMarksItem6 = document.querySelector("#obtained_item-6");
// const obtainedMarksItem7 = document.querySelector("#obtained_item-7");
// const obtainedMarksItem8 = document.querySelector("#obtained_item-8");

// // for getting the student data;
// function sendStudentData() {
//   const dataToSend = [
//     {
//       labelName: labelStudentName.textContent,
//       studentName: inputStudentName.value,
//       labelRoll: labelRollno.textContent,
//       studentRollNo: inputStudentRollNo.value,
//       labelFather: labelFatherName.textContent,
//       studentFatherName: inputFatherName.value,
//       labelGr: labelGrNo.textContent,
//       stundentGrNo: inputGrNo.value,
//       labelMother: labelMotherName.textContent,
//       studentMotherName: inputMotherName.value,
//       labelClass: labelClassName.textContent,
//       studentClassName: inputClassName.value,
//     },
//     {
//       subData1: sub1.value,
//       subData2: sub2.value,
//       subData3: sub3.value,
//       subData4: sub4.value,
//       subData5: sub5.value,
//       subData6: sub6.value,
//       subData7: sub7.value,
//       subData8: sub8.value,
//     },

//     {
//       maxSub1: maxMarkItem1.value,
//       maxSub2: maxMarkItem2.value,
//       maxSub3: maxMarkItem3.value,
//       maxSub4: maxMarkItem4.value,
//       maxSub5: maxMarkItem5.value,
//       maxSub6: maxMarkItem6.value,
//       maxSub7: maxMarkItem7.value,
//       maxSub8: maxMarkItem8.value,
//     },
//     {
//       passingMarkSub1: passingMarkItem1.value,
//       passingMarkSub2: passingMarkItem2.value,
//       passingMarkSub3: passingMarkItem3.value,
//       passingMarkSub4: passingMarkItem4.value,
//       passingMarkSub5: passingMarkItem5.value,
//       passingMarkSub6: passingMarkItem6.value,
//       passingMarkSub7: passingMarkItem7.value,
//       passingMarkSub8: passingMarkItem8.value,
//     },
//     {
//       obtainerMarkSub1: obtainedMarksItem1.value,
//       obtainerMarkSub2: obtainedMarksItem2.value,
//       obtainerMarkSub3: obtainedMarksItem3.value,
//       obtainerMarkSub4: obtainedMarksItem4.value,
//       obtainerMarkSub5: obtainedMarksItem5.value,
//       obtainerMarkSub6: obtainedMarksItem6.value,
//       obtainerMarkSub7: obtainedMarksItem7.value,
//       obtainerMarkSub8: obtainedMarksItem8.value,
//     },
//   ];
//    let encodedData = encodeURIComponent(JSON.stringify(dataToSend)); // Convert data to URL parameters
//    let url = "result.html?data=" + encodedData;
//    window.open(url,  "target=_blank"); 
// }
// generateMarksheetBtn.addEventListener("click", () => {
//   sendStudentData();
//   setBackToDeFault();
// });
// function setBackToDeFault() {
//   // for students information
//   const inputContainer1 = document.querySelectorAll(".col > div input");
//   inputContainer1.forEach((item) => (item.value = ""));
//   // for subjects container
//   const inputContainer2 = document.querySelectorAll(".subjects_name > input");
//   for (let i = 0; i < inputContainer2.length; i++) {
//     if (
//       inputContainer2[i].value == "E.V.S" ||
//       inputContainer2[i].value == "Health & Phy Educ"
//     ) {
//       continue;
//     }
//     inputContainer2[i].value = "";
//   }
//   //for obtainer marks container;
//   const inputContainer3 = document.querySelectorAll(".obtained_marks > input");
//   inputContainer3.forEach((item) => (item.value = ""));
// }
// setBackToDeFault();
const form = document.querySelector(".students_data");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);
   let formObj = Object.fromEntries(formData.entries());
   const jsonString = JSON.stringify(formObj);
   let encodedData = encodeURIComponent(jsonString);
   let url = "result.html?data="+encodedData;
    window.open(url, "target = _blank"); 
})  