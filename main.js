const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

const campoSenha = document.querySelector('#campo-senha');

const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);



const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';


function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*letrasMaiusculas.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
    }

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha + 1;
        tamanhoSenha++;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


