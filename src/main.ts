import './style.css'
 
 const block = document.querySelectorAll('#block') 
 const btn = document.querySelectorAll('.btn') 

 block.forEach(btn=>
   btn.addEventListener('click', (event)=> {
      console.log(event.target.dataset.set);

      // const al= alert (event.target.dataset.set)
      event.preventDefault()
      btn.classList.toggle('blockChangeColor')
      
   })

 )

   //  console.log(block.classList);
    
 

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



console.log(document.DOCUMENT_NODE);



//  const question = confirm('Хочешь стать программистом?');
//  console.log(question);
 
 
 