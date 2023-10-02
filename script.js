const happyGengar = document.querySelector('.happyGengar')
const ditto = document.querySelector('.ditto')


const gengarPulinho = () => {
    happyGengar.classList.add('gengarPulinho')

    setTimeout(() => {

happyGengar.classList.remove('gengarPulinho')

    }, 500);
}

const loop = setInterval(() => {

const dittoPosicao = ditto.offsetLeft;
const gengarPosicao = +window.getComputedStyle(happyGengar).bottom.replace('px','');


if (dittoPosicao>= 880 && dittoPosicao > 0 && gengarPosicao < 50  && 
    dittoPosicao > (happyGengar.offsetLeft - 80) && 
    dittoPosicao < (happyGengar.offsetLeft + 80)) {

ditto.style.animation = 'none';
ditto.style.left = `${dittoPosicao}px`;

happyGengar.style.animation = 'none';
happyGengar.style.bottom = `${gengarPosicao}px`;

happyGengar.src = './gengar_conformado-removebg-preview.png';
ditto.src = './ditto_raiva-removebg-preview.png'
    
}
}, 10);

document.addEventListener('click', gengarPulinho);
