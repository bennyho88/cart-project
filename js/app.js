// show cart

(function () {
  const cartInfo = document.querySelector("#cart-info");
  const cart = document.querySelector("#cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
    console.log("hello");
  });
})();

// add items to the cart

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      //  console.log(event.target) --> check what is clicked

      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        console.log("check fullPath: " + fullPath);
        let pos = fullPath.indexOf("img") + 3;
        console.log("check pos: " + pos);
        let partPath = fullPath.slice(pos);
        console.log("check partPath:" + partPath);

        const item = {};
        item.img = `img-cart${partPath}`;

        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;
        item.name = name;

        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;

        // console.log(name)
        //  console.log(item);

        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

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

        const card = document.querySelector("#cart");
        const total = document.querySelector(".cart-total-container");

        card.insertBefore(cartItem, total);
        alert("item added to the cart");

        showTotals();
      }
    });
  });

  // show totals

  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");

    items.forEach((item) => {
      // parsefloat method for converting string to number
      total.push(parseFloat(item.textContent));
    });

    // console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;

      return total;
    }, 0);

    const finalMoney = totalMoney.toFixed(2);

    console.log(finalMoney);

    let cartTotal = document.querySelector("#cart-total");
    cartTotal.textContent = finalMoney;

    let itemCount = document.querySelector("#item-count");
    let itemTotal = document.querySelector(".item-total");

    itemTotal.textContent = finalMoney;
    itemCount.textContent = total.length;
  }
})();

// modal code

(function () {
  const imageList = [];
  let counter = 0;

  const images = document.querySelectorAll(".store-img");
  const container = document.querySelector(".lightbox-container");
  const closeIcon = document.querySelector(".lightbox-close");
  const item = document.querySelector(".lightbox-item");
  const btnLeft = document.querySelector(".btnLeft");
  const btnRight = document.querySelector(".btnRight");

  // select images and find src

  images.forEach((image) => {
    imageList.push(image.src);
  });

  // open modal

  images.forEach((image) => {
    image.addEventListener("click", function (event) {
      container.classList.add("show");

      let src = event.target.src;

      counter = imageList.indexOf(src);
      console.log(counter);

      item.style.backgroundImage = `url(${imageList[counter]})`;
    });
  });

  // close modal

  closeIcon.addEventListener("click", function () {
    container.classList.remove("show");
  });

  // btn left

  btnLeft.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    console.log(counter);

    item.style.backgroundImage = `url(${imageList[counter]})`;
  });

  // btn right

  btnRight.addEventListener("click", function () {
    counter++;

    if (counter > imageList.length - 1) {
      counter = 0;
    }

    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
})();

// filter code

(function () {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      let value = event.target.dataset.filter;

      const items = document.querySelectorAll(".store-item");

      items.forEach((item) => {
        if (value === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

(function () {
  const searchInput = document.querySelector("#search-item");

  searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase().trim();

    const items = document.querySelectorAll(".store-item");

    items.forEach((item) => {
      let type = item.dataset.item;

      let length = value.length;

      let match = type.slice(0, length);

      if (value === match) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
