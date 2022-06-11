// const allDivs=document.querySelectorAll('.panel')
// console.log(allDivs)
// allDivs.forEach(element=>{
//     element.addEventListener('click',()=>{

//         const attrib=element.getAttribute('class');
//         // console.log(typeof attrib);
//         if(element.hasAttribute('class','active')){
//             element.removeAttribute('class','active')
//             // console.log("hi");
//         }
//         else{
//             element.setAttribute('class','active')
//         }

//     })
// })


const panels=document.querySelectorAll('.panel')

panels.forEach(element=>{
    element.addEventListener('click',()=>{
        removeActiveClasses()
        element.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}