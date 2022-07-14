const optionList = [];
const container = document.querySelector('.container');

container.addEventListener('click', (e) =>{
    if(e.target.className == "services"){
        console.log(e.target)
    }
});

function addOption(opt){
    optionList.push(opt);
}

function verifyOption(event){
    //verifica qual opção foi selecionado
}

function loadOption(opt) {
    //carrega conteudo da opção selecionada    
}



