// function handleProductChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     console.log(phoneNewCount);
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// }



function handleCaseChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    console.log(caseNewCount);
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    else (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerText = '$' + productTotal;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    handleProductChange(true);
});

document.getElementById('phone-minuse').addEventListener('click', function () {
    handleProductChange(false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    handleCaseChange('case',true);
});

document.getElementById('case-minuse').addEventListener('click', function () {
    handleCaseChange('case',false);
});






// document.getElementById('phone-plus').addEventListener('click', function(){
//     console.log('phone plus');
//     const phoneInput =  document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const caseNewCount = phoneCount + 1;
//     phoneInput.value = caseNewCount;
//     console.log(caseNewCount);
//     const phoneTotal = caseNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// });
// document.getElementById('phone-minuse').addEventListener('click', function(){
//     console.log('phone minuse');
//     const phoneInput =  document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const caseNewCount = phoneCount - 1;
//     phoneInput.value = caseNewCount;
//     console.log(caseNewCount);
//     const phoneTotal = caseNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// });