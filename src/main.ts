import './style.css'
 




class Katridge {
   color: string;
   amount_of_ink: number;
   constructor(color: string, amount_of_ink=100) {
       this.color = color;
       this.amount_of_ink = amount_of_ink;
   }
   display(str: string) {
       // let quantity = this.amount_of_ink;
       for (let i = 0; i < str.length; i++) {
           if (this.amount_of_ink != 0) {
             if (str[i] != ' ') this.amount_of_ink -= 0.5
             output2.innerHTML += `<span style="color:${this.color}; opacity:${this.amount_of_ink/100}">${str[i]}</span>`
           }else{
             // if (i < str.length){
             //   this.amount_of_ink = 100
             //   continue
             // }
           }
       }
   }
 }
 class FullInk extends Katridge{
   full (){
       this.amount_of_ink = 100
   }
 }
 
 let lineText: string 
 // let color1 : string
 const ink = document.querySelectorAll('input[name="color"]') as NodeListOf<HTMLInputElement>
 let asd = {} as any
 for (let colors of ink) {
   asd[colors.value] = {katridge: new FullInk(colors.value), div: document.querySelector(`.${colors.value} div`)}
 }
 console.log(asd)
 const printText = document.querySelector ('.display') as HTMLButtonElement
 const output2 = document.querySelector('#print p') as HTMLParagraphElement
 // const inputColors = document.querySelectorAll('input[type="radio"][name="color"]') as NodeListOf<HTMLInputElement>
 
 const onClickc = function (){
   let checked = ''
   for (let color of ink) {
     if (color.checked) {
       checked = color.value
     }
   }
   lineText = (document.querySelector('.input') as HTMLInputElement).value
   
   asd[checked]?.katridge?.display(lineText) 
   asd[checked]?.div.setAttribute('style','width:'+(asd[checked]?.katridge?.amount_of_ink*3)+'px')
 }
 printText?.addEventListener('click', onClickc)
 
 
 
 // const asd = new FullInk('red',5)
 //  //asd.full(10)
 // asd.display(lineText)
 
 
 
 
 
 
 // const printText = document.getElementById(".qwe") as HTMLButtonElement
 // printText.addEventListener("click", () => {
 //   const myInput = document.getElementById("#DZ1 input") as HTMLInputElement;
 //   const value = myInput.value;
 //   console.log(value);
 // });
 
 
 
 
 
 
 
 
 
 // Создаём и описываем новый html-элемент
 const myNewDiv = document.createElement('div')
 myNewDiv.className = 'aaa bbb'
 myNewDiv.setAttribute('style','color:green')
 myNewDiv.innerText = 'div созданный в js'
 myNewDiv.addEventListener('click', ()=>{alert('hello')})
 
 // Добавляем в уже существующий элемент
 const divForPrintMachine = document.querySelector('.forPrintMachine')
 divForPrintMachine?.appendChild(myNewDiv)
 
 
 // Получаем элементы
 const input1 = document.querySelector('#task1 input') as HTMLInputElement
 
 if (input1) input1.value




//! Сделать маркер (красный, синий, зеленый)!

const markerContainer = document.querySelector('#markerContainer') as HTMLDivElement
const redMarker = document.querySelector ('#red') as HTMLButtonElement
const greenMarker = document.querySelector ('#green') as HTMLButtonElement
const blueMarker = document.querySelector ('#blue') as HTMLButtonElement
const deleteLetters = document.querySelector ('#deleteLetters') as HTMLButtonElement
const printLetters = document.querySelector ('#printLetters') as HTMLButtonElement
const markerText = document.querySelector ('#markerText') as HTMLInputElement
const showText = document.querySelector ('#showText') as HTMLDivElement
const pencil = document.querySelector ('#pencil') as HTMLPictureElement
const rightSide = document.querySelector ('#rightSide') as HTMLDivElement
const line1 = document.querySelector ('#line1') as HTMLDivElement
 

markerContainer.addEventListener ('click', ()=> {
   
})

// печать текста в нижнем блоке
printLetters.addEventListener ('click', ()=> {
   showText.innerHTML += markerText.value   
})


// печать текста в верхнем блоке
markerText.addEventListener('keydown', (event)=> {

   pencil.style.marginLeft = markerText.value.length*7.4-1000+ 'px'
   let elem = rightSide.childNodes[3]
   let digital = markerText.value.length
   elem.innerHTML = digital+1
   
   let elem2 = rightSide.childNodes[7]
   elem2.innerHTML = (digital+1)*2.5 + '%'
 

   let moveLine = line1.firstElementChild
   moveLine.style.width = digital*6.1 + 'px'
   moveLine.style.border ='1px solid aliceblue'
   moveLine.style.transition = .5 + 's'
   
   if (elem.innerHTML>=41){
      markerText.innerHTML= ''
      alert ('Блок переполнен')
   }
   
   if (event.code == 'Backspace' || event.code == 'Delete' || event.key == 'Backspace' || event.key == 'Delete') {
      pencil.style.marginLeft = markerText.value.length*7.4-1014.4 + 'px' 
      elem2.innerHTML = (digital-1)*2.5 + '%'
      elem.innerHTML = digital-1
      if (elem.innerHTML ==-1) {
         elem.innerHTML=0
      }

      if (elem2.innerHTML==-2.5+ '%'){
         elem2.innerHTML=0+ '%'
         
      }

      // if (moveLine.style.width == digital*6.1 + 'px') {
      //    moveLine.style.width = (digital-1)*6.1 + 'px'
      // }
      moveLine.style.width == digital*30 + 'px'
      console.log(markerText.value.length);
      console.log(  moveLine.style.width == digital*6.1 + 'px');
   }
   
})

// console.log(markerText.innerText.length);
// console.log(markerText.innerHTML.length);
// pencil.classList.add('pencilRed')

redMarker.addEventListener('click', ()=> {
   markerText.style.color = 'red'   
   pencil.classList.remove('pencilBlue')
   pencil.classList.add('pencilRed')
   pencil.classList.remove ('pencilGreen')
})

greenMarker.addEventListener('click', ()=> {
   markerText.style.color = 'green'   
   pencil.classList.add('pencilGreen')
   pencil.classList.remove('pencilBlue')
})

blueMarker.addEventListener('click', ()=> {
   markerText.style.color = 'blue'   
   pencil.classList.add('pencilBlue')
})

deleteLetters.addEventListener('click', (event)=> {
   markerText.value = ''
   if (event.code == 'Backspace') {
      pencil.style.marginLeft = markerText.value.length*7.4-1014.4 + 'px'
   }
     
         
})











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

 


// !   .style.cssText - меняет стили также как и в CSS


     const checkStyle = document.querySelector('#checkStyle') as HTMLDivElement
     
     checkStyle.style.cssText = `
     color:aliceblue;
     padding:10px;
     margin:25px;
     background-color:red;
     text-align:center;
     `
     checkStyle.innerHTML = '<span style=color:aqua >Замена</span> стилей через .style.cssText'
    
      
      const btn_1 = document.querySelector('#btn_1')  as HTMLDivElement
      
      
      const list_scedrule = document.querySelectorAll('.list>li')
      list_scedrule.forEach(list =>{
         list.addEventListener ('click',(event)=> {
            // console.log(list_scedrule[1]);
            //   for (let i=0; i<btn.length;i++) {


               //! Через data-set
               // let y = parseInt(list.dataset.set)
               // btn_1.innerHTML = `кнопка li ${list_scedrule[y-1].innerHTML}`
               // console.log(parseInt(btn_1.style.paddingLeft)+'px');
               // btn_1.style.transition = 1.5 +'s'
               // btn_1.style.paddingLeft = 50*y+'px'
               // btn_1.style.paddingRight = 50*y+'px'
               
               
               
               // //! Через list.innerHTML
               let z = list.innerHTML
               btn_1.style.paddingLeft = 50*z+'px'
               btn_1.style.paddingRight = 50*z+'px'
               btn_1.style.transition = 1.5 +'s'
               btn_1.innerHTML = `кнопка li ${z}`
               console.log(parseInt(z));
               
               console.log(btn_1.style.paddingLeft);
               
               // if (btn_1.nextElementSibling=null) {
                  btn_1.nextElementSibling.style.color = 'blue'
               // }

               // console.log((q));
               


               // console.log(parseInt(btn_1.style.paddingLeft)+'px');


               // btn_class[3].style.color = 'red'
               // btn_class[4].style.width = list[3].innerHTML
               
               // }
               
               
            })
         })
         
         
         //! Зажатие 'Alt' помогает выделить место для текста сразу в нескольких местах
         
         
         
         
         
         console.log(`ширина окна браузера ${window.innerWidth} px`);
         
         
         console.log(window.innerHeight);
         
         
         
         
         //! Браузерное окружение Window:
         
         //! BOM
         // console.log(navigator);
         // console.log(location);
         // console.log(history);
         
         //! DOM (всё что в HTML странице)
         // console.log(document);
         
         //! Javascript
         // console.log(Object);
         // console.log(Array);
         // console.log(Function);
         
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
         
         
         
         
         
         
         
         