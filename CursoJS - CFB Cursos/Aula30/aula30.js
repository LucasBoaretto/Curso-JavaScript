// const dc1 = document.getElementById('c1');
// const dc2 = document.getElementById('c2');

// console.log(dc1);
// console.log(dc1.id);
// console.log(dc1.innerHTML);

// dc1.innerHTML = 'CFB Cursos';


const dc1 = document.getElementById('c1');
const dc2 = document.getElementById('c2');
const dc3 = document.getElementById('c3');
const dc4 = document.getElementById('c4');
const dc5 = document.getElementById('c5');
const dc6 = document.getElementById('c6');

const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6];

// for(i of arrayElementos){
//     i.innerHTML = 'CFB Cursos';
// }

arrayElementos.map((e)=>{
    console.log(e)
    e.innerHTML = 'CFB Cursos'
});
