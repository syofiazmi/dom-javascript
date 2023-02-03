// DOM Selection

// node root . methodnya()



// 1. getElementById() -> Element

// const judul = document.getElementById('judul');

// judul.style.color = 'green';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'M. Syofi Azmi';



// 2. getElementByTagName() -> HTMLCollection

// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'green';
// }



// 3. getElemenByClassName -> HTMLCollection

// const p1 = document.getElementsByClassName('p1')[0];

// p1.innerHTML = "ubah deh";



// 4. querySelector() -> Element

// const p4 = document.querySelector('#b p');

// p4.style.color = 'orange';
// p4.style.fontSize = '50px';


// const li3 = document.querySelector('section#b ul li:nth-child(3)');

// li3.style.backgroundColor = 'pink';



// 5. querySelectorAll() -> NodeList


// const p = document.querySelectorAll('p');

// p[2].style.backgroundColor = 'lightblue';












// console.log(typeof(p));