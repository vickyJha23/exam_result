
const elements = {
 pdfBtn : document.querySelector(".pdf_btn"),
 displayResult: document.querySelector("#displayResult"),
 }
const {displayResult} = elements;
console.log(displayResult);
const {pdfBtn} = elements; //destructuring of array....
window.addEventListener("load", () => {
  let item = JSON.parse(localStorage.getItem("data"));
  setResult(item);
  pdfBtn.addEventListener("click", () => {
        generatePdf(item[0]);
  });
});

function setResult(item) {
    item.forEach((obj) => {
         generateResult(obj)
    })
}

function generateResult(obj){
       const date = new Date();
       const dt = date.getDate();
       const month = date.getMonth(); // month are 0 index based
       const year = date.getFullYear();
       const newDate = `${dt}/0${(month + 1)}/${year}`; 
       obj.maxMarksTotal = function () {
            return ['maxMark1', 'maxMark2', 'maxMark3', 'maxMark4', 'maxMark4', 'maxMark5', 'maxMark6', 'maxMark7'].reduce((total, key) =>{
                   if(obj.hasOwnProperty(key) && !isNaN(parseInt(obj[key]))){
                      return total + parseInt(obj[key]);
                   }
                   else{
                      console.log(`invalid or missing key property ${key}`);
                      return total;
                   }
            }, 0)
       };
       obj.totalPassing = function() {
            let total = `${parseInt(this.passMark1) + 
                 parseInt(this.passMark2) + 
                 parseInt(this.passMark3) + 
                  parseInt(this.passMark4) + 
                  parseInt(this.passMark5) + 
                  parseInt(this.passMark6) + 
                  parseInt(this.passMark7)}`;
           return total; 
       };

       obj.obtainTotal = function () {
              let total = `${parseInt(this.obtMark1) + 
                     parseInt(this.obtMark2) + 
                     parseInt(this.obtMark3) + 
                      parseInt(this.obtMark4) + 
                      parseInt(this.obtMark5) + 
                      parseInt(this.obtMark6) + 
                      parseInt(this.obtMark7)}`;
             return total;
       }
     obj.percentage = function(){
           return((this.obtainTotal() / this.maxMarksTotal()) * 100).toFixed(2);
     }
     obj.greeting = function() {
           let percent = this.percentage(); 
           if(percent >= 90 && percent <= 100){
              return `outstanding`;
        }
        else if(percent >= 80 && percent < 90){
              return `Excellent`;
        }
        else if(percent >= 70 && percent < 80){
             return `very good`;
        }
        else if(percent >= 60 && percent < 70){
            return `good`;
        }
        else if(percent >= 50 && percent < 60){
            return `satisfactory`;
        }
        else if(percent >= 40 && percent < 50){
             return `acceptable`
        }
        else if(percent >= 35 && percent < 40){
            return `partially acceptable`
        }
        else{
             return 'insufficient';
        }
     }
     obj.result = function() {
          let percent = this.percentage();
          if(percent >= 35){
               return `passed and promoted to syjc`;
          }
          else{
              return `failed`;
          }
     }
      const div = document.createElement("div");
      div.className = "resultContainer";
      div.innerHTML =   `
      <div id="result">
      <div class="header">
        <img src="/exam_result/image.png" alt="()" />
      </div>
      <div class="main">
        <div class="title">
          <h1>ACADEMIC YEAR : 2023-24</h1>
          <h3 class="stream">${obj.class.slice(5)} section</h3>
        </div>
        <div class="container">
          <div class="student_info">
            <div class="name_label">
              <p>Student Name:</p>
              <p>Father's Name:</p>
              <p>Mother's Name:</p>
            </div>
            <div class="names_data">
              <p class="student_name">${obj.StudentName}</p>
              <p class="father_name">${obj.fatherName}</p>
              <p class="mother_name">${obj.motherName}</p>
            </div>
            <div class="extra_data_label">
              <p>Roll No:</p>
              <p>Gr.No:</p>
              <p>Class/Section:</p>
            </div>
            <div class="extra_data">
              <p class="roll_no">${obj.rollNo}</p>
              <p class="gr_no">${obj.grNo}</p>
              <p class="class">${obj.class}</p>
            </div>
          </div>
          <div class="subjects_info">
            <div class="subject_title">
              <div class="s">
                <p>Subjects</p>
              </div>
              <div class="mm">
                <p>Max marks</p>
              </div>
              <div class="pm">
                <p>Passing Marks</p>
              </div>
              <div class="o">
                <p>Obtained</p>
              </div>
            </div>
            <div class="sub_con">
              <div class="subjects">
                <div class="s1">${obj.sub1}</div>
                <div class="s2">${obj.sub2}</div>
                <div class="s3">${obj.sub3}</div>
                <div class="s4">${obj.sub4}</div>
                <div class="s5">${obj.sub5}</div>
                <div class="s6">${obj.sub6}</div>
                <div class="s7">${obj.sub7}</div>
                <div class="s8">${obj.sub8}</div>
              </div>
              <div class="maxM">
                <div class="mm1">${obj.maxMark1}</div>
                <div class="mm2">${obj.maxMark2}</div>
                <div class="mm3">${obj.maxMark3}</div>
                <div class="mm4">${obj.maxMark4}</div>
                <div class="mm5">${obj.maxMark5}</div>
                <div class="mm6">${obj.maxMark6}</div>
                <div class="mm7">${obj.maxMark7}</div>
                <div class="mm8">${obj.maxMark8}</div>
              </div>
              <div class="PassM">
                <div class="pm1">${obj.passMark1}</div>
                <div class="pm2">${obj.passMark2}</div>
                <div class="pm3">${obj.passMark3}</div>
                <div class="pm4">${obj.passMark4}</div>
                <div class="pm5">${obj.passMark5}</div>
                <div class="pm6">${obj.passMark6}</div>
                <div class="pm7">${obj.passMark7}</div>
                <div class="pm8">${obj.passMark8}</div>
              </div>
              <div class="ObtM">
                <div class="om1">${obj.obtMark1}</div>
                <div class="om2">${obj.obtMark2}</div>
                <div class="om3">${obj.obtMark3}</div>
                <div class="om4">${obj.obtMark4}</div>
                <div class="om5">${obj.obtMark5}</div>
                <div class="om6">${obj.obtMark6}</div>
                <div class="om7">${obj.obtMark7}</div>
                <div class="om8">${obj.obtMark8}</div>
              </div>
            </div>
            <div class="totalContainer">
                <p>total</p>
                <p class="MaxTotal">${obj.maxMarksTotal()}</p>
                <p class="PassTotal">${obj.totalPassing()}</p>
                <p class="obtTotal">-</p>
            </div>
            <div class="cal_result_con">
                 <div class="labelresult">
                     <div class="agg">
                         <p>Aggregate</p>
                     </div>
                     <div class="per">
                         <p>Percentage(%)</p>
                     </div>
                     <div class="res">
                         <p>Result</p>
                     </div>
                     <div class="att">
                         <p>Attendance</p>
                     </div>
                     <div class="con">
                         <p>Conduct</p>
                     </div>
                 </div>
                 <div class="calresult">
                      <p class="calAgg">${obj.obtainTotal()}</p>
                      <p class="calPer">${obj.percentage()}%</p>
                      <p class="calRes">${obj.result()}</p>
                      <p class="calAtt">${obj.obtAtt} day's</p>
                      <p class="calCon">${obj.greeting()}</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p class="date">DATE: ${newDate}</P>
          <div class="signatures">
               <div class="class_teacher">
                  <div></div>
                  class teacher
               </div>
               <div class="college_seal">
                    <div></div>
                    college seal
               </div>
               <div class="principal">
                   <div></div>
                    principal
               </div>
          </div>
         <img src="/exam_result/footer.png" alt="" style="width: 100%;">
      </div>
    </div>
         `;
   displayResult.appendChild(div);
            
}
function generatePdf(studentData) {
    let opt = {
      margin:      [0.5, 0.2, 0.5, 0.2],
      filename:     `result.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf(displayResult, opt);
}

