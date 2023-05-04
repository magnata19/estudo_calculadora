function inserir(num) {
    document.querySelector(".display").innerHTML += num;
}

function clean() {
   document.querySelector(".display").innerHTML = ""; 
}

function back() {
    let tela = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = tela.substring(0, 
    tela.length -1
);
}

function somar(){
    let tela = document.querySelector(".display").innerHTML;
    if(tela){
    document.querySelector(".display").innerHTML = eval(tela);
    } else {
        document.querySelector(".display").innerHTML = "nenhum comando..."
    }
}