function handleProductChange(product, isIncrease) {
    console.log('phone minuse');
    const productInput =  document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    // const phoneNewCount = productCount - 1;
    let productNewCount = 0;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    console.log(productNewCount);
    // const productTotal = productNewCount * 1219;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerText = '$' + productTotal;
    calculateTotal();
}

function calculateTotal(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const TotalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + TotalPrice;

    const tax = TotalPrice * 0.1;
    document.getElementById('tax-amount').innerText = '$' + Math.round(tax);

    const grandTotal = TotalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}




document.getElementById('check-out').addEventListener('click', function(){
    alert('Fil up the form before buying any product');
});
document.getElementById('check-out').addEventListener('click', function(){
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('contact-form').style.display = 'block';
});

document.getElementById('buy').addEventListener('click', function(){
    alert('Order Place Successfully');
});



















// function handleCaseChange(isIncrease) {
//     console.log('phone minuse');
//     const phoneInput =  document.getElementById('case-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = 0;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     console.log(phoneNewCount);
//     const phoneTotal = phoneNewCount * 59;
//     document.getElementById('case-price').innerText = '$' + phoneTotal;
// }




















// document.getElementById('phone-plus').addEventListener('click', function(){
//     console.log('phone plus');
//     const phoneInput =  document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     console.log(phoneNewCount);
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// });
// document.getElementById('phone-minuse').addEventListener('click', function(){
//     console.log('phone minuse');
//     const phoneInput =  document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     console.log(phoneNewCount);
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// });