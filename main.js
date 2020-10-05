const element = {
    card_back_1: document.querySelector('.card-back-1'),
    card_back_2: document.querySelector('.card-back-2'),
    btn_color_1: document.querySelector('.btn-color-1'),
    btn_color_2: document.querySelector('.btn-color-2'),
    btn_color_3: document.querySelector('.btn-color-3'),
    btn_color_4: document.querySelector('.btn-color-4'),
    btn_color_5: document.querySelector('.btn-color-5'),
    btn_close_card: document.querySelector('.btn-close'),
    price_1: document.querySelector('.price-1 h1'),
    price_2: document.querySelector('.price-2 h1'),
    price_3: document.querySelector('.price-3 h1')
}
let flag = true;
let index = 0;


const prices = {
    prices_card_1: 600,
    prices_card_2: 800,
    prices_card_3: 940
}

const img = {
    collection_1: [
        'img/Collection 1/SOFA-1.JPG',
        'img/Collection 1/SOFA-2.JPG',
        'img/Collection 1/SOFA-3.JPG',
        'img/Collection 1/SOFA-4.JPG',
        'img/Collection 1/SOFA-5.JPG'
    ],
    collection_2: [
        'img/Collection 2/SOFA-1.JPG',
        'img/Collection 2/SOFA-2.JPG',
        'img/Collection 2/SOFA-3.JPG',
        'img/Collection 2/SOFA-4.JPG',
        'img/Collection 2/SOFA-5.JPG'
    ],
    collection_3: [
        'img/Collection 3/SOFA-1.JPG',
        'img/Collection 3/SOFA-2.JPG',
        'img/Collection 3/SOFA-3.JPG',
        'img/Collection 3/SOFA-4.JPG',
        'img/Collection 3/SOFA-5.JPG'
    ]
}
const arr_card = [...document.querySelectorAll('.card')];
/*
* First Button
*/
arr_card[0].firstElementChild.addEventListener('click', increment_index);
arr_card[1].firstElementChild.addEventListener('click', increment_index);
arr_card[2].firstElementChild.addEventListener('click', increment_index);


function increment_index(){
    let length = arr_card.length;
    arr_card[index].classList.remove('on');
    arr_card[index].classList.add('off');
    priceEffect(890);
    index++;
    if (index == length) index = 0;
    arr_card[index].classList.remove('off');
    arr_card[index].classList.add('on');
    console.log(index);
    addEffect();
}

element.card_back_1.addEventListener("animationend",()=>{
    element.card_back_1.classList.remove('on');
});
element.card_back_2.addEventListener("animationend",()=>{
    element.card_back_2.classList.remove('on');
});

function addEffect(){
    element.card_back_1.classList.add('on');
    element.card_back_2.classList.add('on');
}

const arr_1 = [...document.querySelectorAll('.card-1 .btn-group button')];
const btn__1 = document.querySelector('.card-1 .btn-group');
const img_card_1 = arr_card[0].firstElementChild.nextElementSibling.firstElementChild;
const arr_2 = [...document.querySelectorAll('.card-2 .btn-group button')];
const btn__2 = document.querySelector('.card-2 .btn-group');
const img_card_2 = arr_card[1].firstElementChild.nextElementSibling.firstElementChild;
const arr_3 = [...document.querySelectorAll('.card-3 .btn-group button')];
const btn__3 = document.querySelector('.card-3 .btn-group');
const img_card_3 = arr_card[2].firstElementChild.nextElementSibling.firstElementChild;


btn__1.addEventListener('click', ({target})=>{
    changeImg(target, img.collection_1, arr_1, img_card_1);
});

btn__2.addEventListener('click', ({target})=>{
    changeImg(target, img.collection_2, arr_2, img_card_2);
});

btn__3.addEventListener('click', ({target})=>{
    changeImg(target, img.collection_3, arr_3, img_card_3);
});


function changeImg(element, obj, arr, img){
    if(element.tagName == 'BUTTON'){
        let index_color = Number(element.className[10]);
        img.src = obj[index_color-1];
        removeActiveButton(arr);
        element.classList.add('active');
    }
}

function removeActiveButton(arr){
    arr.forEach(e=>{
        e.classList.remove('active');
    });
}



function priceEffect(value){

    let number = 590;
    let id = setInterval(()=>{
        if(index == 0){
            element.price_1.innerHTML = number + '&#36;';
        }
        if(index == 1) {
            element.price_2.innerHTML = number + '&#36;';
        }
        if(index == 2) {
            element.price_3.innerHTML = number + '&#36;';
        }
        number++;
        if(number == value+1 ) {
            clearInterval(id);
        }
    }, 1);
}

