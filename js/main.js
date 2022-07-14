const optionList = ["services", "products", "reserve", "others"];
const container = document.querySelector('.container');

container.addEventListener('click', (e) =>{
   loadOption(verifyOption(e));
});

function addOption(opt){
    optionList.push(opt);
}

function verifyOption(event){
    for(let x = 0; x < optionList.length; x++){   
        if(event.target.classList[1] === optionList[x]){
            return optionList[x];
        }else{
            
            return;
        }
    }
}

function loadOption(opt) {
    for(let x = 0; x < optionList.length; x++ ){
        if(opt === "services"){
            console.log('carregando services')
            return
        }else if(opt === "products"){
            console.log('carregando products');
            return
        }else if(opt === "reserve"){
            console.log('carregando reserve');
            return
        }else if(opt === "others"){
            console.log('carregando others');
            return
        }
    }
}