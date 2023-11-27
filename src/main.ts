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
         
         
         
         const previousSibling = btn_5.previousElementSibling  as HTMLDivElement
         
         btn_5.addEventListener ('click', ()=> {
            console.log(block.nextElementSibling.style.color = 'red' );
         })
         
         console.log(previousSibling);
         btn_5
         
         
         console.log(block.childNodes);  //!Содержание элементов в родители
         console.log(block.childNodes[6]); //! текст-блок, текст-блок, внимательно в написании!
         
         console.log(block.firstElementChild); //! первый ребёнок элемента
         console.log(block.lastElementChild); //! последний ребёнок элемента
         
         console.log(block.previousElementSibling); //! Предыдущий элемент того же родителя
         console.log(block.nextElementSibling); //! Следующий элемент того же родителя
         






                        //! Методы вставки ОБЪЕКТА в  DOM

         //! before - перед обьектом
         //! after - после обьекта
         //! prepend - внутрь и вначало обьекта
         //! append - внутрь и в конец обьекта

         const btn_4 = document.querySelector('#btn_4')  as HTMLButtonElement
         // block.before(btn_4)
         // block.after(btn_4)
         // block.prepend(btn_4)
         block.append(btn_4)
 
         
                  //! insertAdjacentHTML - Метод вставки ТЕКСТА 
                     //! beforebegin
                     //! afterbegin
                     //! beforeend
                     //! afterend

         const changeTextBlock = document.querySelector('.name2')  as HTMLButtonElement
         changeTextBlock.insertAdjacentHTML ('afterbegin', '<span style=color:red background:yellow >afterbegin </span>')
         changeTextBlock.insertAdjacentHTML ('beforebegin', '<span style=color:red background:yellow >beforebegin </span>')
         changeTextBlock.insertAdjacentHTML ('beforeend', '<span style= color:blue> beforeend</span>')
         changeTextBlock.insertAdjacentHTML ('afterend', '<span style= color:blue> afterend</span>')





         //! getElementById - наиболее используемый после addEventListener
         









       
         
         
         console.log(document.body.children);
         
         console.log(btn[2].innerHTML);
         console.log(btn[2].outerHTML); //!Показывает весь див целиком
         
         
         
         let press_button = document.getElementById('press')
         press_button.style.backgroundColor = 'blue'
         console.log(press_button);
         
         
         
         //! часто 'сложные' значения лучше записывать в константу const row = table.rows
         
         const table = document.querySelector('table') as HTMLTableElement
         table.addEventListener ('click', ()=> {
            // table.rows[1].style.backgroundColor = 'pink'
            // table.rows[2].style.backgroundColor = 'lightgrey'
            // table.rows[3].style.backgroundColor = 'brown'
            
            for (let i=0; i<table.rows.length; i++) {
               let row = table.rows[i]
               row.cells[i].style.backgroundColor = 'red'
               console.log(row);
               
            }
            
         })
         
         
         
      
   




         // const firstRow = table.firstElementChild?.firstElementChild
         
         // console.log(firstRow);
         
         // firstRow.style.backgroundColor = 'red'
         
         
         
         
         
         
         
         