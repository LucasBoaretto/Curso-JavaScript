const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector("#resultado");
const display = document.querySelector(".display");
const ton = document.getElementById("ton");
const tlimpar = document.getElementById("tlimpar");
const tigual = document.getElementById('resultado');
const calc_aba = document.getElementById("calc_aba");
const calc_principal = document.getElementById("calc_principal");

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener("click", (e) => {
        sinal = false;
        if (e.target.innerHTML == '.') {
            if (!decimal) {
                decimal = true;
                if (display.innerHTML == "0") {
                    display.innerHTML = "0.";
                } else {
                    display.innerHTML += e.target.innerHTML;
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = "";
            }
            display.innerHTML += e.target.innerHTML;
        }
        if (display.style.display == 'none') {
            display.innerHTML = 0;
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (!sinal) {
            sinal = true;
            if (display.innerHTML == 0) {
                display.innerHTML = '';
            }
            if (e.target.innerHTML == 'x' || e.target.innerHTML == 'X') {
                display.innerHTML += "*"
            } else {
                display.innerHTML += e.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", (e) => {
    display.innerHTML = "0";
    sinal = false;
    decimal = false;
})

ton.addEventListener("click", (e) => {
    if (ton.innerHTML == 'ON') {
        ton.innerHTML = 'OFF';
        display.style.display = 'block'
    } else {
        ton.innerHTML = 'ON'
        display.style.display = 'none'
        display.innerHTML = 0;
        decimal = false;
    }
})

tigual.addEventListener("click", (e) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
})

calc_aba.addEventListener("click", (e) => {
    calc_principal.classList.toggle("calc_principal_exibir");
    if (calc_principal.classList.contains("calc_principal_exibir")) {
        calc_aba.innerHTML = "❌"
    } else {
        calc_aba.innerHTML = "➕"
    }
})