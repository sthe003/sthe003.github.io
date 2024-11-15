//atribuindo IDs para os produtos
let navbar = document.querySelector('.navbar');
let products = [
    {
        id: 1,
        name: "Whey Protein",
        imagePath: "imagens/iten1.webp",
        price: 80.99,
        priceBefore: 90.99
    },
    {
        id: 2,
        imagePath: "imagens/iten2.webp",
        name: "Barrinhas YoPro",
        price: 15.99,
        priceBefore: 20.99
    },
    {
        id: 3,
        imagePath: "imagens/iten3.webp",
        name: "Pré Treino 4B",
        price: 55.99,
        priceBefore: 70.99
    }
]
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//funcao para deletar os itens do carrinho
function removeItemFromCart(productId) {
    const item = document.querySelector(`.cart-item[data-id="${productId}"]`);
    if (item) {
        item.remove();
    }
}

//funcao para chamar os IDs, para atribuicao e contagem de itens
function addItemToCart(productId) {
    const container = document.querySelector('.cart-items');
    let product = products.find(item => item.id == productId);
    const cartContainer = document.querySelector('.cart-container');
    
    if (product) {

        let existingItem = container.querySelector(`.cart-item[data-id="${productId}"]`);

        if (existingItem) {

            let quantityElement = existingItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
        } else {
            const itemHTML = `
                <div class="cart-item" data-id="${product.id}">
                    <span class="fas fa-times remove-item" onclick="removeItemFromCart('${product.id}')"></span>
                    <img src="${product.imagePath}" alt="">
                    <div class="content">
                        <h3>${product.name}</h3>
                        <div class="price">$${product.price}/-</div>
                        <label>Quantidade</label>
                        <div class="quantity">1</div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHTML);
        }

        const cartItems = cartContainer.querySelectorAll('.cart-item');

        const removeButton = container.querySelector(`.cart-item[data-id="${product.id}"] .remove-item`);
        removeButton.addEventListener('click', () => removeItemFromCart(product.id));
    }
}

//botoes de pesquisa, carrinho e navegacao
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


//para scrollar o site com mais leveza 
$(function(){
    (function inicia(){
       var altura_pagina = $("body").outerHeight(true);
       var altura_janela = window.innerHeight;
       var velocidade = 8000; 
       var intervalo = 3 
 
       $(this).scrollTop(0);
 
       $('html, body').animate({
          scrollTop: altura_pagina-altura_janela
       }, (altura_pagina/500) * velocidade, "linear", function(){
          setTimeout(function(){
             inicia();
          }, intervalo*1000);
       });
    }());
 })

