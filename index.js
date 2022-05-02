let allTotal = 0;

function addToCard(element){
    let mainEl = element.closest(".single-item");
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if ( parseInt(quantity) > 0) {
        price = price.substring(1);
        let total = price * parseInt(quantity);
        allTotal += total;

        cartItems.innerHTML += `<div  class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} * ${quantity} = $<span>${total}</span>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;
        document.querySelector('.total').innerText = `Total: $${allTotal}`;
        element.innerText = "Dodato";
        element.setAttribute('disabled', true);

    } else {
        alert('odaberi kolicinu');
    }

}

function removeFromCart(element){
    let mainEl = element.closest(".cart-single-item");
    let total = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    total= parseInt(total);
    allTotal -= total;
    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainEl.remove();

    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        if(itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = "Dodaj";
        }
    });

}