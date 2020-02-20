// global variables

 const cartInfoBtn = document.querySelector('#cart-info');
// const cartInfoBtn = document.querySelector('.navbar-toggler');


const itemCount = document.querySelector('#item-count');
const itemTotal = document.querySelector('#item-total');


const cartText = document.querySelector('#cart');
const itemImg = document.querySelector('#item-img');
const itemTitle = document.querySelector('#cart-item-title');
const itemPrice = document.querySelector('#cart-item-price');
const itemRemove = document.querySelector('#cart-item-remove');

const cartTotal = document.querySelector('#cart-total');
const cartClear = document.querySelector('#clear-cart');


const storeImg = document.querySelector('.store-img');

// cart info function

cartInfoBtn.addEventListener('click', function() {
    console.log('hello');
    cartText.classList.toggle('show')
})

// click icon and add function