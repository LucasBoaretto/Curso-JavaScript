const objs=document.getElementsByTagName('div');

let num=[10,20,30,40,50];

for(o in objs){
    console.log(objs[o].innerHTML)
}

for(o of objs){
    console.log(o.innerHTML = 'curso')
}


// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }