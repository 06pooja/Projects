// let btn = document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let state = document.querySelector("input").value;
//     let colArr = await getCollege(state);
//     console.log(colArr);
// show(colArr);
// })
// function show(colArr){
//     let list = document.querySelector("#list");   
//     list.innerText = "";
//     for(coll of colArr){
//         console.log(coll.name);
//     let li = document.createElement("li");
//     li.innerText = coll.name;
//     list.appendChild(li);
//     }
// }
// let url = "http://universities.hipolabs.com/search?name=";
// async function getCollege(state){
//     let res = await axios.get(url + state);
//     return res.data;
// }

let pic = document.querySelector("#pic");

pic.addEventListener("click", ()=>{
let modelBox = document.querySelector("#PicModelBox");
modelBox.style.display ="block";
})

let close = document.querySelector(".close");

close.addEventListener("click",()=>
{
    let modelBox = document.querySelector("#PicModelBox");
modelBox.style.display ="none";
})

//--------------Education-----------------//
let education = document.querySelector("#education");

education.addEventListener("click", ()=>{
let educationDetails = document.querySelector("#educationModelBox");
educationDetails.style.display ="block";
})

let close_education = document.querySelector(".closeEducation");

close_education.addEventListener("click",()=>
{
    let educationDetails = document.querySelector("#educationModelBox");
    educationDetails.style.display ="none";
})
//--------------Experience-----------------//
let experience = document.querySelector("#experience");

experience.addEventListener("click", ()=>{
let experienceModelBox = document.querySelector("#experienceModelBox");
experienceModelBox.style.display ="block";
})

let closeExperience = document.querySelector(".closeExperience");

closeExperience.addEventListener("click",()=>
{
    let experienceModelBox = document.querySelector("#experienceModelBox");
    experienceModelBox.style.display ="none";
})

//----------------Projects-----------------//
let projects = document.querySelector("#projects");

projects.addEventListener("click", ()=>{
let projectsModelBox = document.querySelector("#projectsModelBox");
projectsModelBox.style.display ="block";
})

let closeProjects = document.querySelector(".closeProjects");

closeProjects.addEventListener("click",()=>
{
    let projectsModelBox = document.querySelector("#projectsModelBox");
    projectsModelBox.style.display ="none";
})
//----------------Skills-----------------//
let skills = document.querySelector("#skills");

skills.addEventListener("click", ()=>{
let skillsModelBox = document.querySelector("#skillsModelBox");
skillsModelBox.style.display ="block";
})

let closeSkills = document.querySelector(".closeSkills");

closeSkills.addEventListener("click",()=>
{
    let skillsModelBox = document.querySelector("#skillsModelBox");
    skillsModelBox.style.display ="none";
})
//----------------Contact Details-----------------//
let contact_details = document.querySelector("#contact_details");

contact_details.addEventListener("click", ()=>{
let contactDetailsModelBox = document.querySelector("#contactDetailsModelBox");
contactDetailsModelBox.style.display ="block";
})

let closeContactDetails = document.querySelector(".closeContactDetails");

closeContactDetails.addEventListener("click",()=>
{
    let contactDetailsModelBox = document.querySelector("#contactDetailsModelBox");
    contactDetailsModelBox.style.display ="none";
})

//--------------------call-------------------------//
let callLogo = document.querySelector(".callLogo");

callLogo.addEventListener("click", ()=>{
    let email = document.querySelector("#email");
    email.style.display ="none";

    let phone = document.querySelector("#phone");
    phone.style.display ="block";
})
let phone = document.querySelector("#phone");
phone.addEventListener("mouseout",()=>{
    let phone = document.querySelector("#phone");
    phone.style.display ="none";
})
//--------------------email-------------------------//
let emailLogo = document.querySelector(".emailLogo");

emailLogo.addEventListener("click",()=>{
    let email = document.querySelector("#email");
    email.style.display ="block";
})
let email = document.querySelector("#email");
email.addEventListener("mouseout",()=>{
    let email = document.querySelector("#email");
    email.style.display ="none";
})
