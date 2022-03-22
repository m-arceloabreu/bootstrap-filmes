

/*
Acessando
Por TAG: getElementByTagName()
Por ID: getElementById()
Por nome: getElementByName()
Por classe: getElementsByClassName()
Por seletor: querrySelector()
*/
let email = window.document.querySelector('#exampleFormControlInput1');
let assunto = window.document.getElementById('exampleFormControlInput');
let mensagem = window.document.querySelector('#exampleFormControlTextarea1');


let emailOk = false;
let assuntoOk = false;
let mensagemOk = false;

function validaEmail(){
    let txtEmail = document.querySelector('#txt-email')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML ='Email Invalido'
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML ='Email Válido'
        txtEmail.style.color ='green'
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txt-assunto');

    if(assunto.value.length < 3){
        txtAssunto.innerHTML = 'Nome Inválido'
        txtAssunto.style.color = 'red'
        }else{
            txtAssunto.innerHTML='Nome Válido'
            txtAssunto.style.color ='green'
            assuntoOk = true;
        }
}



function counter(){
    contador = document.querySelector('#contador')
    tamanho = mensagem.value.length;
    if(mensagem.value.length >= 100){
        contador.innerHTML = tamanho + ('/100 (Máximo de 100 Caracteres!!!)')
        contador.style.color = 'red'
        mensagemOk = false;
        
    }else{
        contador.innerHTML = tamanho + ('/100')
        contador.style.color = '#4b6584';
        mensagemOk = true;  
    }
}
function enviar(){
    if(assuntoOk == true && emailOk == true && mensagemOk == true){
        alert('Formulario enviado com sucesso!!!')
    }
    else{
        alert('Preencha o formulario corretamente')
    }
}


function mapaNormal(){
    mapa.style.width = '40vw'

}