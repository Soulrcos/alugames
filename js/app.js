const select = (item) => document.querySelectorAll(item);
const imgJogo = select('.dashboard__items__item');
let jogoAlugado = 3;


function onOffClass(nItem){
    imgJogo[nItem-1].children[0].classList.toggle('dashboard__item__img--rented');
    imgJogo[nItem-1].children[2].classList.toggle('dashboard__item__button--return');
}

function alterarStatus(nItem) {
    if (imgJogo[nItem-1].children[0].classList.contains('dashboard__item__img--rented') && jogoAlugado == nItem){
        onOffClass(nItem);
        imgJogo[nItem-1].children[2].innerText = 'Alugar';
        jogoAlugado = 0;
    }
    else if (jogoAlugado == 0){
        jogoAlugado = nItem;
        onOffClass(nItem);
        imgJogo[nItem-1].children[2].innerText = 'Devolver';
    }
}