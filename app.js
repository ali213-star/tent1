
function total() {
    let tenttotal = document.getElementById('tent-total');
    let caseSubTotal = document.getElementById('case-total');
    let subTotal = parseInt(tenttotal.innerText) + parseInt(caseSubTotal.innerText)
    document.getElementById('sub-total').innerText = subTotal;

    let tax = Math.ceil((5 / 100) * subTotal);
    let total = Math.ceil(subTotal + ((5 / 100) * subTotal))

    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;


}

function updateProduct(productName, isIncreasing) {

    let productNumber = document.getElementById(productName + '-number');
    let productQuantity = parseInt(productNumber.value)

    if (isIncreasing) {
        productQuantity = productQuantity + 1;
    }
    else {
        if (productQuantity > 0) {
            productQuantity = productQuantity - 1;
        }
    }
    productNumber.value = productQuantity;

    if (productName === 'tent') {
        productPrice = productQuantity * 1219;
        document.getElementById(productName + '-total').innerText = productPrice
    }
    else if (productName === 'case') {
        productPrice = productQuantity * 59;
        document.getElementById(productName + '-total').innerText = productPrice
    }

    // subtotal
    total()


}

document.getElementById('tent-plus').addEventListener('click', function () {
    updateProduct('tent', true)
})


document.getElementById('tent-minus').addEventListener('click', function () {
    updateProduct('tent', false)

})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', true)
})


document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', false)

})



/*************** Icone close items ****************/
for(let i=1;i<=3;i++){
    document.querySelector(`btn-${i}`)
           .addEventListener("click", function(e) {
            total=total-price[i];
            document.querySelector('.subTotal').innerHTML=total+' dt';
            document.querySelector(`.productName-${i}`).remove();
    });
    }
    
    /*************** Icone Love ****************/
    let hearts = Array.from(document.querySelectorAll('.fa-heart'))
    for (let heart of hearts){
        heart.addEventListener("click", function(e) {
            heart.style.setProperty('color','red')
    });
    }