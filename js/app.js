// show cart

(function() {

const cartInfo = document.querySelector('#cart-info');
const cart = document.querySelector('#cart');

cartInfo.addEventListener('click', function() {

    cart.classList.toggle('show-cart');
    console.log('hello');
})
})();

// add items to the cart

(function() {



const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(btn => {
    btn.addEventListener('click', function(event) {
       
        if (event.target.parentElement.classList.contains('store-item-icon')) {

            let fullPath = event.target.parentElement.parentElement.firstElementChild.src;
            let pos = fullPath.indexOf('img') + 3;
            let defPath = fullPath.slice(pos);
            

            const item = {};

            item.img = `img-cart${defPath}`;

         let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

         item.name = name;

         let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

        const finalPrice = price.slice(1).trim();

        item.price = finalPrice
     
            console.log(item);

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
            cartItem.innerHTML = `
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="cart-item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
            `;

          const total = document.querySelector('.cart-total-container');
          const cart = document.querySelector('#cart')

          cart.insertBefore(cartItem, total);
          alert('item added the cart')

          showTotals();



        }
    })
})






























/*
const cartBtn = document.querySelectorAll('.store-item-icon');


cartBtn.forEach(btn => {
    btn.addEventListener('click', function(event) {
        
      //  console.log(event.target) --> check what is clicked

        
       if(event.target.parentElement.classList.contains('store-item-icon')) {
         
        let fullPath = event.target.parentElement.previousElementSibling.src;
        console.log('check fullPath: ' + fullPath);
        let pos = fullPath.indexOf('img') + 3;
        console.log('check pos: ' + pos);
        let partPath = fullPath.slice(pos);
        console.log('check partPath:' + partPath)

        const item = {};
        item.img = `img-cart${partPath}`;

        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;

        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        
        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;
        

        // console.log(name)
       //  console.log(item);


        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3')

        cartItem.innerHTML = `
        <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
          </div>`;
        
        // select card

        const card = document.querySelector('#cart');
        const total = document.querySelector('.cart-total-container');

        card.insertBefore(cartItem, total);
        alert('item added to the cart');

        showTotals();

       }
    })
})
*/
// show totals

function showTotals() {
    
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

  
    items.forEach(item => {
        // parsefloat method for converting string to number
        total.push(parseFloat(item.textContent));
    })

   // console.log(total);

   const totalMoney = total.reduce(function(total, item) {
     
    total += item;
    
    return total;
   }, 0);

   const finalMoney = totalMoney.toFixed(2);

   console.log(finalMoney);

   let cartTotal = document.querySelector('#cart-total');
   cartTotal.textContent = finalMoney;

   let itemCount = document.querySelector('#item-count');
   let itemTotal = document.querySelector('.item-total');

   itemTotal.textContent = finalMoney;
   itemCount.textContent = total.length;
}
})();


