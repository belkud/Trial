import './style.css'



const changeLanguage = document.querySelector('#changeLanguage') as HTMLHeadElement
const language = document.querySelector('#language') as HTMLButtonElement
 

const markerColor = document.querySelector('#markerColor') as HTMLDivElement

changeLanguage.addEventListener ('click', ()=> {
   // language.innerHTML =='русский'
   if (language.innerHTML =='русский') {
      language.innerHTML = 'английский'
      language.style.backgroundColor = 'blue'
      
      markerColor.innerHTML = 'Выбрать цвет маркера'
   } else {
      language.innerHTML = 'русский'
      language.style.backgroundColor = 'red'
      
      markerColor.innerHTML = 'Change color of marker'
   }
})

//! Маркер

const markerContainer = document.querySelector('#markerContainer') as HTMLDivElement
const redMarker = document.querySelector('#red') as HTMLButtonElement
const greenMarker = document.querySelector('#green') as HTMLButtonElement
const blueMarker = document.querySelector('#blue') as HTMLButtonElement
const deleteLetters = document.querySelector('#deleteLetters') as HTMLButtonElement
const deleteLetters2 = document.querySelector('#deleteLetters2') as HTMLButtonElement
const printLetters = document.querySelector('#printLetters') as HTMLButtonElement
const writeText = document.querySelector('#writeText') as HTMLInputElement
const printText = document.querySelector('#printText') as HTMLDivElement
const pencil = document.querySelector('#pencil') as HTMLPictureElement
const rightSide = document.querySelector('#rightSide') as HTMLDivElement
const line1 = document.querySelector('#line1') as HTMLDivElement
const line2 = document.querySelector('#line2') as HTMLDivElement
const simbols = document.querySelector('#simbols') as HTMLDivElement


// звуки
const audio = new Audio()
audio.src = 'ChangeMarker.mp3'

const audio2 = new Audio()
audio2.src = 'WriteMarker.mp3'

let eraser = new Audio()
eraser.src = 'eraserSound.mp3'

let print = new Audio()
print.src = 'printSound.mp3.mp3'

// printText.style.height = 20 +'px'

printLetters.addEventListener('click', () => {
   print.play()
   // div c печатными символами
   printText.innerHTML += writeText.value
   let num = printText.innerHTML.length
   //    if (num>=0 && num<=43) {
   //       printText.style.height =20 +'px'
   //    } else if (num>43 && num<=86) {
   //       printText.style.height =32 +'px'
   //    } else if (num>86 && num<=129) {
   //       printText.style.height =48 +'px'
   //    } else if (num>129 && num<=172){
   //       printText.style.height =64 +'px'
   //    } else {
   //       printText.style.height =80 +'px'
   //    }
   //    if (num>=200) {
   //       alert ('Нижний блок заполнен')
   //       printText.style.color ='red'
   // }

   //! ВОПРОСЫ:
   //! 1. Как можно код выше сделать через цикл
   //! 2. Через <span> менять цвет маркера
   //! 3. Некорректное отображение поведения кнопок (event.code == 'Backspace' || event.code == 'Delete')

   // div c печатными символами (второй способ)
   for (let i = 1; i <= 5; i++) {
      if (num / 43 > i) {
         printText.style.height = 16 * (i + 1) + 'px'
         // console.log(num);
         // console.log(i);
      }
      if (num >= 200) {
         console.log('Нижний блок заполнен')
         printText.style.color = 'red'
      }
   }



   //бегущая нижняя строчка
   let number = rightSide.childNodes[15]
   number.innerHTML = printText.innerHTML.length
   let moveLine = line2.firstElementChild

   moveLine.style.width = simbols.innerHTML * 1.19 + 'px'
   moveLine.style.transition = .5 + 's'
   moveLine.style.border = '1px solid aliceblue'

   // div 'Заполненность нижнего блока'
   line2.previousElementSibling.innerHTML = simbols.innerHTML / 2 + '%'

})


let moveLine = line1.firstElementChild as HTMLDivElement
// печать текста в верхнем блоке
writeText.addEventListener('keydown', (event) => {

   pencil.style.marginLeft = writeText.value.length * 7.4 - 1000 + 'px'
   let elem = rightSide.childNodes[3] as HTMLDivElement
   let digital = writeText.value.length
   elem.innerHTML = digital + 1

   let elem2 = rightSide.childNodes[7]
   elem2.innerHTML = (digital + 1) * 2.5 + '%'


   moveLine.style.border = '1px solid aliceblue'
   moveLine.style.width = (digital + 1) * 6 + 'px'
   moveLine.style.transition = .5 + 's'

   audio2.play()

   if (elem.innerHTML >= 41) {
      writeText.innerHTML = ''
      alert('Блок переполнен')
   }

   if (event.code == 'Backspace' || event.code == 'Delete' || event.key == 'Backspace' || event.key == 'Delete') {
      pencil.style.marginLeft = writeText.value.length * 7.4 - 1014.4 + 'px'
      elem2.innerHTML = (digital - 1) * 2.5 + '%'
      elem.innerHTML = digital - 1
      if (elem.innerHTML == -1) {
         elem.innerHTML = 0
      }

      if (elem2.innerHTML == -2.5 + '%') {
         elem2.innerHTML = 0 + '%'
      }

      if (moveLine.style.width == (digital + 1) * 6 + 'px') {
         moveLine.style.width = (digital - 1) * 6 + 'px'
         // console.log(digital);
      }
      if (digital == 0) {
         moveLine.style.width = 0 + 'px'
         pencil.style.marginLeft = -1007 + 'px'
      }
   }



})


//! смена маркера
redMarker.addEventListener('click', () => {
   writeText.style.color = 'red'
   pencil.classList.remove('pencilBlue')
   pencil.classList.add('pencilRed')
   pencil.classList.remove('pencilGreen')
   audio.play()
})

greenMarker.addEventListener('click', () => {
   writeText.style.color = 'green'
   pencil.classList.add('pencilGreen')
   pencil.classList.remove('pencilBlue')
   audio.play()
})

blueMarker.addEventListener('click', () => {
   writeText.style.color = 'blue'
   pencil.classList.add('pencilBlue')
   audio.play()
})

// удаление символов в верхнем блоке
deleteLetters.addEventListener('click', (event) => {
   eraser.play()
   writeText.value = ''
   pencil.style.marginLeft = -1007 + 'px'
   if (event.code == 'Backspace') {
      pencil.style.marginLeft = writeText.value.length * 7.4 - 1014.4 + 'px'
   }
})

// удаление символов в нижнем блоке
deleteLetters2.addEventListener('click', (event) => {
   eraser.play()
   printText.innerHTML = ''

})











const block = document.querySelector('#block') as HTMLDivElement
const btn = document.querySelectorAll('.btn')

btn.forEach(btn =>
   btn.addEventListener('click', (event) => {
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
btn[1].addEventListener('click', () => {
   btn[2].innerHTML = 'Изменено'
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


const btn_1 = document.querySelector('#btn_1') as HTMLDivElement


const list_scedrule = document.querySelectorAll('.list>li')
list_scedrule.forEach(list => {
   list.addEventListener('click', (event) => {
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
      btn_1.style.paddingLeft = 50 * z + 'px'
      btn_1.style.paddingRight = 50 * z + 'px'
      btn_1.style.transition = 1.5 + 's'
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

// !Грамотно давать названия обьектам



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



const previousSibling = btn_5.previousElementSibling as HTMLDivElement

btn_5.addEventListener('click', () => {
   console.log(block.nextElementSibling.style.color = 'red');
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

const btn_4 = document.querySelector('#btn_4') as HTMLButtonElement
// block.before(btn_4)
// block.after(btn_4)
// block.prepend(btn_4)
block.append(btn_4)


//! insertAdjacentHTML - Метод вставки ТЕКСТА 
//! beforebegin
//! afterbegin
//! beforeend
//! afterend

const changeTextBlock = document.querySelector('.name2') as HTMLButtonElement
changeTextBlock.insertAdjacentHTML('afterbegin', '<span style=color:red background:yellow >afterbegin </span>')
changeTextBlock.insertAdjacentHTML('beforebegin', '<span style=color:red background:yellow >beforebegin </span>')
changeTextBlock.insertAdjacentHTML('beforeend', '<span style= color:blue> beforeend</span>')
changeTextBlock.insertAdjacentHTML('afterend', '<span style= color:blue> afterend</span>')





//! getElementById - наиболее используемый после addEventListener











console.log(document.body.children);

console.log(btn[2].innerHTML);
console.log(btn[2].outerHTML); //!Показывает весь див целиком



let press_button = document.getElementById('press')
press_button.style.backgroundColor = 'blue'
console.log(press_button);



//! часто 'сложные' значения лучше записывать в константу const row = table.rows

const table = document.querySelector('table') as HTMLTableElement
table.addEventListener('click', () => {
   // table.rows[1].style.backgroundColor = 'pink'
   // table.rows[2].style.backgroundColor = 'lightgrey'
   // table.rows[3].style.backgroundColor = 'brown'

   for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i]
      row.cells[i].style.backgroundColor = 'red'
      console.log(row);

   }

})









//  let promise1 = new Promise((resolve, reject)=>{
//    resolve('Верно')
//  })

//  promise1.then((value)=> {
//     console.log(value);
//  })




//  let promise2 = new Promise((resolve, reject)=> {
//    reject('Неверно')
//  })
//  promise2.catch((err)=> {
//    console.log(err);
//  })


//! Промисы

//! Промис(Promise) — специальный объект JavaScript, который используется
//! для написания и обработки асинхронного кода.

//! Выполнение JS-кода — однопоточное. Это значит, что в конкретный момент
//! времени движок может выполнять не более одной строки кода. То есть вторая
//! строка не будет выполнена, пока не выполнится первая.
//! Такое выполнение кода (строка за строкой) называется синхронным.


//! Стек — это структура данных, в которой элементы упорядочены так, что 
//! последний элемент, который попадает в стек, выходит из него первым 
//! (LIFO: last in, first out). 
 




let promise1 = new Promise((resolve, reject) => {
   resolve('Одобрено')
})
promise1.catch((error) => {
   console.log(error);
}).then((event) => {
   console.log(event);
}).finally(() => {
   console.log('promise1 завершён');
});




let promise2 = new Promise((resolve, reject) => {
   reject('Отказано')
})
promise2.then((event) => {
   console.log(event);
}).catch((error) => {
   console.log(error);
}).finally(() => {
   console.log('promise2 завершён');

})

//! Первый способ
// fetch('https://jsonplaceholder.typicode.com/todos/')
//    .then((response) => response.json())
//    .then((json) => console.log(json))
//    .catch((err) => console.log(err.message));

// let start = new Date()
// console.log(start.toString());

//! Второй способ
// async function fetchTodos(url: any) {
//    const response = await fetch(url);
//    const json = await response.json()
//    console.log(json);
// }
// fetchTodos('https://jsonplaceholder.typicode.com/todos/')




// setTimeout(function greet() {
//    console.log('Hello!')
//  }, 5000)
 
//  console.log("I'm being called before greet function.")
 





 function outer() {
   function inner() {
     // Функция 3
     console.log('Hello!')
   }
 
   // Функция 2
   inner()
 }
 
 // Функция 1
 outer()
 


 function main() {
   setTimeout(function greet() {
     console.log('Hello!')
   }, 2000)
 
   console.log('Bye!')
 }
 
 main()
 