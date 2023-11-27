import './style.css'
 
 const block = document.querySelector('#block')  as HTMLDivElement
 const btn = document.querySelectorAll('.btn') 
 
 btn.forEach(btn=>
   btn.addEventListener('click', (event)=> {
      console.log(event.target.dataset.set);
     
      
      btn.classList.toggle('blockChangeColor')
      
      if (block.style.backgroundColor == 'pink') {
         block.style.backgroundColor = 'orange'
      } else {
         block.style.backgroundColor = 'pink'
      }
   })
   )

//! Могу искать отдельно по каждой кнопке класса
   btn[1].addEventListener('click', ()=> {
        btn[2].innerHTML= 'Изменено'
        btn[2].style.backgroundColor = 'red'
   })


      
      
      
      
      // press_button.addEventListener ('click', ()=> {
      //    console.log(9080);
      // })
      
    
      
      const btn_1 = document.querySelector('#btn_1')  as HTMLDivElement
 

      const list_scedrule = document.querySelectorAll('.list>li')
      list_scedrule.forEach(list =>{
          list.addEventListener ('click',()=> {
         //   for (let i=0; i<btn.length;i++) {
            const x = list.innerHTML*100
         btn_1.style.paddingLeft = x+'px'
         btn_1.style.transition = 3 +'s'
            // btn_class[3].style.color = 'red'
            // btn_class[4].style.width = list[3].innerHTML
            
      // }
      
      
   })
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
for (let node of document.body.childNodes) {
   // console.log(node);
   
}

// !closest часто используется для проверки на существование родителя
const child = document.querySelector('#btn_1') as HTMLDivElement
const parent = child.closest('#block')
console.log(parent);
console.log(parent);
 
 
  



console.log(block.firstChild); //! первый ребёнок элемента
console.log(block.lastChild); //! последний ребёнок элемента

console.log(block.childNodes);  //!Содержание элементов в родители
console.log(block.childNodes[6]); //! текст-блок, текст-блок, внимательно в написании!
// block.childNodes[5].remove()


console.log(block.previousSibling); //! div ПЕРЕД block
console.log(block.nextSibling); //! div ПОСЛЕ block

 

console.log(document.body.children);

console.log(btn[2].innerHTML);
console.log(btn[2].outerHTML); //!Показывает весь див целиком



const press_button = document.getElementsByClassName('.press')
      
console.log(press_button);
 