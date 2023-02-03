



//DOM Manipulation - Node


// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Ini paragraf baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// ====


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('ini item baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


// ===


// ambil parentnya : SectionA, sudah dibikin di atas

// ambil elemen childnya: elemennya a di section A, di index ke 0
const link = document.getElementsByTagName('a')[0];

// Js tolong di node sectionA hapus child yang ada di node link.
sectionA.removeChild(link);



// ===

// ambil parent yang mau diubah : Section b
const sectionB = document.getElementById('b');
// ambil child yang mau diubah, di section b : p
const p4 = sectionB.querySelector('p');



// bikin elemen baru
const h2Baru = document.createElement('h2');
// bikin isinya
const teksH2Baru = document.createTextNode('Judul Baru');

// masukin isinya ke elemen baru
h2Baru.appendChild(teksH2Baru);
// di section b, replace child (elemen baru, elemen yh mau direplace)
sectionB.replaceChild(h2Baru, p4);