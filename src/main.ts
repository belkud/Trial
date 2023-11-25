import './style.css'
 
 const block = document.querySelector('#block') as HTMLDivElement
 block.addEventListener ('click', ()=> {
    console.log(423);
    
 })

 console.log(`ширина окна браузера ${window.innerWidth} px`);
 

 console.log(window.innerHeight);




//! Браузерное окружение Window:

//! BOM
 console.log(navigator);
 console.log(location);
 console.log(history);
 
//! DOM (всё что в HTML странице)
console.log(document);

//! Javascript
console.log(Object);
console.log(Array);
console.log(Function);






//  const question = confirm('Хочешь стать программистом?');
//  console.log(question);
 
 
 