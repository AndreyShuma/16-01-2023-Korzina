'use strict'
const price_banan = document.querySelector('.price_banan').innerHTML;
const price_all= document.querySelector('.price_all');
const btn_pl = document.querySelector('.btn_plus');
const btn_min = document.querySelector('.btn_minus');
const btn_enter = document.querySelector('.btn_enter');
const btn_all = document.querySelector('.btn_all');
const input_banan = document.querySelector('.input_banan');

let a = 0;

function result() {
    btn_all.innerHTML = a ;
    price_all.textContent = a * Number(price_banan) ;
    // console.log(typeof a);
    // console.log(typeof Number(price_banan))
}

input_banan.addEventListener('keyup', () => {
    if (+input_banan.value >= 0) {
        a = +input_banan.value;
    } else { 
        input_banan.value = 0;
        a = 0;
    };

    result();
    // console.log("input:", a)
})

btn_pl.addEventListener('click', () => {
    a++;
    result();
    input_banan.value = a;
    // console.log("Клик +:", a)
});

btn_min.addEventListener('click', () => {
    a--;
    if (a>=0) {
        result();
        input_banan.value = a;
        //  console.log("Клик -:", a)
    } else ( a =0)
    
});

btn_all.innerHTML = a;
price_all.textContent = 0;
console.log(btn_all);
