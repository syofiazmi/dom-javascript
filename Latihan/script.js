
// 1. 
// bikin tombol untuk merubah warna secara sederhana
const tUbahWarna = document.getElementById('ubahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


// 2.
// bikin tombol baru
// ketika di klik, merubah warna random
const tAcakWarna = document.createElement('button');
const namaTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(namaTombol);
tAcakWarna.setAttribute('type','button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r)

    document.body.style.backgroundColor = 'rgb('+ r +',' + g +','+ b +')';
});


// 3.
// bikin slider
// ketika digeser, warna akan berubah, range nya dari 0 - 255
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +',' + g + ','+ b +')'
}); 

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +',' + g + ','+ b +')'
}); 

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +',' + g + ','+ b +')'
}); 


// 4.
// warna background akan berubah ketika mouse digerakkan
document.body.addEventListener('mousemove',function(event){
    // posisi mouse
    // ukuran browser
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos + ','+ yPos +', 100)';
});
