// Event Handling
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(){
//         card[i].style.display = 'none';
//     });
// }


// DOM Traversal
const close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click',function(e){
    //   close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';

    });
}

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     })
// });