let qd1 = document.getElementById('qd1')
let qd2 = document.getElementById('qd2')


function subir1(){
    qd1.style.transform = "translateY(-10px)"
}
function descer1(){
    qd1.style.transform = "translateY(0px)"
}
function subir2(){
    qd2.style.transform = "translateY(-10px)"
}
function descer2(){
    qd2.style.transform = "translateY(0px)"
}

qd1.addEventListener('click', () => {
    window.location.href = "Mundo dos Peixes/index.html";
  });

qd2.addEventListener('click', () => {
    window.location.href = "Tabuada/index.html";
  });

qd1.style.cursor = 'pointer'
qd2.style.cursor = 'pointer'