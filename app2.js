const stream = document.querySelector(".stream");
const studentName = document.querySelector(".student_name");
const fatherName = document.querySelector(".father_name");
const motherName = document.querySelector(".mother_name");
const rollNo = document.querySelector(".roll_no");
const grNo = document.querySelector(".gr_no");
const studentClass = document.querySelector(".class");
const sub1 = document.querySelector(".s1");
const sub2 = document.querySelector(".s2");
const sub3 = document.querySelector(".s3");
const sub4 = document.querySelector(".s4");
const sub5 = document.querySelector(".s5");
const sub6 = document.querySelector(".s6");
const sub7 = document.querySelector(".s7");
const sub8 = document.querySelector(".s8");
const maxMark1 = document.querySelector(".mm1");
const maxMark2 = document.querySelector(".mm2");
const maxMark3 = document.querySelector(".mm3");
const maxMark4 = document.querySelector(".mm4");
const maxMark5 = document.querySelector(".mm5");
const maxMark6 = document.querySelector(".mm6");
const maxMark7 = document.querySelector(".mm7");
const maxMark8 = document.querySelector(".mm8");
const pdfBtn = document.querySelector(".pdf_btn");
const passMark1 = document.querySelector(".pm1"); 
const passMark2 = document.querySelector(".pm2"); 
const passMark3 = document.querySelector(".pm3"); 
const passMark4 = document.querySelector(".pm4"); 
const passMark5 = document.querySelector(".pm5"); 
const passMark6 = document.querySelector(".pm6"); 
const passMark7 = document.querySelector(".pm7"); 
const passMark8 = document.querySelector(".pm8");
const obtMark1 = document.querySelector(".om1"); 
const obtMark2 = document.querySelector(".om2"); 
const obtMark3 = document.querySelector(".om3"); 
const obtMark4 = document.querySelector(".om4"); 
const obtMark5 = document.querySelector(".om5"); 
const obtMark6 = document.querySelector(".om6"); 
const obtMark7 = document.querySelector(".om7"); 
const obtMark8 = document.querySelector(".om8"); 
const maxTotal = document.querySelector(".MaxTotal");
const passTotal = document.querySelector(".PassTotal");
const calAggregates = document.querySelector(".calAgg");
const calPercentage = document.querySelector(".calPer");
const calResult = document.querySelector(".calRes");
const calAttendance = document.querySelector(".calAtt");
const calComment = document.querySelector(".calCon");
window.addEventListener("load", function () {
  let queryString = window.location.search;
  let param = new URLSearchParams(queryString);
  let encodedData = param.get("data");
  let decodedData = decodeURIComponent(encodedData);
  const dataObject = JSON.parse(decodedData);
     handleMarksheetGeneration(dataObject);
     pdfBtn.addEventListener("click", () => {
           generatePdf(dataObject);
     });
});

function handleMarksheetGeneration(studentData) {
      updateMarksheet(studentData);
}

function updateMarksheet(studentData){
       stream.textContent = `${studentData.class.slice(5)} section`;
       studentName.textContent = `${studentData.StudentName}`;
       rollNo.textContent = `${studentData.rollNo}`;
       grNo.textContent = `${studentData.grNo}`;
       motherName.textContent = `${studentData.motherName}`;
       studentName.textContent = `${studentData.StudentName}`;
       studentName.textContent = `${studentData.StudentName}`;
       studentName.textContent = `${studentData.StudentName}`;
       studentClass.textContent = `${studentData.class}`;
       sub1.textContent = `${studentData.sub1}`;
       sub2.textContent = `${studentData.sub2}`;
       sub3.textContent = `${studentData.sub3}`;
       sub4.textContent = `${studentData.sub4}`;
       sub5.textContent = `${studentData.sub5}`;
       sub6.textContent = `${studentData.sub6}`;
       sub7.textContent = `${studentData.sub7}`;
       sub8.textContent = `${studentData.sub8}`;
       maxMark1.textContent = `${studentData.maxMark1}`;
       maxMark2.textContent = `${studentData.maxMark2}`;
       maxMark3.textContent = `${studentData.maxMark3}`;
       maxMark4.textContent = `${studentData.maxMark4}`;
       maxMark5.textContent = `${studentData.maxMark5}`;
       maxMark6.textContent = `${studentData.maxMark6}`;
       maxMark7.textContent = `${studentData.maxMark7}`;
       maxMark8.textContent = `${studentData.maxMark8}`;
       passMark1.textContent =   `${studentData.passMark1}`;
       passMark2.textContent =   `${studentData.passMark2}`;
       passMark3.textContent =   `${studentData.passMark3}`;
       passMark4.textContent =   `${studentData.passMark4}`;
       passMark5.textContent =   `${studentData.passMark5}`;
       passMark6.textContent =   `${studentData.passMark6}`;
       passMark7.textContent =   `${studentData.passMark7}`;
       passMark8.textContent =   `${studentData.passMark8}`;
       obtMark1.textContent = `${studentData.obtMark1}`;
       obtMark2.textContent = `${studentData.obtMark2}`;
       obtMark3.textContent = `${studentData.obtMark3}`;
       obtMark4.textContent = `${studentData.obtMark4}`;
       obtMark5.textContent = `${studentData.obtMark5}`;
       obtMark6.textContent = `${studentData.obtMark6}`;
       obtMark7.textContent = `${studentData.obtMark7}`;
       obtMark8.textContent = `${studentData.obtMark8}`;
       const mTotal =  handleSumOfMarks(maxMark1.textContent, maxMark2.textContent, maxMark3.textContent, maxMark4.textContent, maxMark5.textContent, maxMark6.textContent, maxMark7.textContent);
       maxTotal.textContent = mTotal;
       const passingTotal = handleSumOfMarks(passMark1.textContent, passMark2.textContent, passMark3.textContent, passMark4.textContent, passMark5.textContent, passMark6.textContent, passMark7.textContent);
       passTotal.textContent = passingTotal;
       const totalObtMark = handleSumOfMarks(obtMark1.textContent, obtMark2.textContent, obtMark3.textContent, obtMark4.textContent, obtMark5.textContent, obtMark6.textContent, obtMark7.textContent);
       calAggregates.textContent = totalObtMark;
       const percentage = calculatePercentage(totalObtMark, mTotal);
       calPercentage.textContent = percentage + "%";
       calAttendance.textContent = `${studentData.obtAtt} days`;
       const greeting = handleGreeting(percentage);
       calComment.textContent = greeting;
       const resultComment = displayResult(percentage);
       calResult.textContent = resultComment;
}
function handleSumOfMarks(...values){
     values = values.reduce((acc, currValue) => {
          return parseInt(acc) + parseInt(currValue);
     }, 0)
     return values;
}
function calculatePercentage(totalObtMark, mTotal){
    return (((totalObtMark / mTotal) * 100).toFixed(2));
}
function handleGreeting(percentage){
      if(percentage >= 90 && percentage <= 100){
            return `outstanding`;
      }
      else if(percentage >= 80 && percentage < 90){
            return `Excellent`;
      }
      else if(percentage >= 70 && percentage < 80){
           return `very good`;
      }
      else if(percentage >= 60 && percentage < 70){
          return `good`;
      }
      else if(percentage >= 50 && percentage < 60){
          return `satisfactory`;
      }
      else if(percentage >= 40 && percentage < 50){
           return `acceptable`
      }
      else if(percentage >= 35 && percentage < 40){
          return `partially acceptable`
      }
      else{
           return 'insufficient';
      }
}
function displayResult(percentage) {
     if(percentage >= 90 && percentage <= 100){
          return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 80 && percentage < 90){
          return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 70 && percentage < 80){
         return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 60 && percentage < 70){
        return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 50 && percentage < 60){
        return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 40 && percentage < 50){
         return `Passed and Promoted to syjc`;
    }
    else if(percentage >= 35 && percentage < 40){
        return `Passed and Promoted to syjc`;
    }
    else{
         return 'failed';
    }
}

function generatePdf(studentData) {
  let element = document.querySelector("#result");
  const opt = {
    margin: 0.2,
    filename: `${studentData.StudentName}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2Canvas: { scale: 2, imageSmoothingEnabled: true },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf(element, opt);
}
