//Get references to the form and dispaly area
var form = document.getElementById('Editable-Resume-Form');
var resumeDisplayElement = document.getElementById('resumeDisplay');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    //type assertion
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //create resume output
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    //dispaly the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume desplay element is missing');
    }
});
// //Get references to the form and dispaly area
// const form = document.getElementById('Resume-Form') as HTMLFormElement;
// const resumeDispalyElement = document.getElementById('resumeDisplay') as HTMLDivElement;
// //Handle form submission
// form.addEventListener('submit',(event: Event) => {
//     event.preventDefault(); //prevent page reload
//     //collect input values
//     //type assertion
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     const experience = (document.getElementById('experience') as HTMLInputElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value;
//     //create resume output
//     const resumeHTML = `
//     <h2><b>Editable Resume</b></h2>
//     <h3>Personal Information</h3>
//     <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
//     <p><strong>Name:</strong><span id="edit-email" class="editable">${email}</span></p>
//     <p><strong>Name:</strong><span id="edit-phone" class="editable">${phone}</span></p>
//     <h3>Education</h3>
//     <p id="edit-education" class="editable">${education}</p>
//     <h3>Experience</h3>
//     <p id="edit-experience" class="editable">${experience}</p>
//     <h3>skills</h3>
//     <p id="edit-skills" class="editable">${skills}</p>
//     `;
//     //dispaly the generated resume
//     const resumeDisplayElement = document.getElementById('resumeDispaly')
//     if (resumeDispalyElement){
//         resumeDispalyElement.innerHTML = resumeDisplay;
//     makeEditable();
//     }else {
//         console.error('The resume desplay element is missing')
//     }
// });
// function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(Element => {
//         Element.addEventListener('click' , function(){
//             const currentElement = Element as HTMLElement
//             const currentValue = currentElement.textContent || ""
//             //replace content
//             if (currentElement.tagName === "p" || currentElement.tagName === 'span'){
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentValue
//                 input.classList.add('editing-input')
//                 input.addEventListener('blur', function (){
//                     currentElement.textContent = input.value
//                     currentElement.style.display = 'inline'
//                     input.remove()
//                 })
//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus()
//             }
//         })
//     })
// }
