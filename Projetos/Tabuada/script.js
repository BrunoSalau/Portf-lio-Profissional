let Tabuada = document.querySelector('.MostrarTabuada');
let Botao = document.querySelector('button');

let Num = document.getElementsByTagName('input')[0]

if(NumReq.value < 10000){
    Tabuada.classList.add('AnimTabuada')
}
else if(NumReq.value > 9999){   
        Tabuada.classList.add('AnimTabuadaa')
}






function Tab(){
    let p = document.querySelectorAll(".MostrarTabuada p");
    console.log(p.length);
    let NumReq = document.getElementsByTagName('input')[0]

    if(NumReq.value < 10000){
        Tabuada.classList.add('AnimTabuada')
    }
    else if(NumReq.value > 9999 && NumReq.value < 100000000){   
        Tabuada.classList.add('AnimTabuadaa')
    }
    else if(NumReq.value >= 100000000 && NumReq.value < 1000000000000){   
        Tabuada.classList.add('AnimTabuadaaa')
    }
    else if(NumReq.value >= 1000000000000){   
        Tabuada.classList.add('AnimTabuadaaaa')
    }



    if(p.length < 2){

        for(let i=0;i<=10;i++){
        const Element = document.createElement("p")
        let result = NumReq.value * i
        Element.textContent = NumReq.value+' x '+i+" = "+result
        Tabuada.appendChild(Element)
    }

    }
    else{
        for(let i = 0;i <= 10;i++){
            let result = NumReq.value * i
            p[i].innerHTML = NumReq.value+" x "+i+"= "+result
        }
    }
}

