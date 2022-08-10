function handleProductChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    console.log(phoneNewCount);
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-price').innerText = '$' + phoneTotal;
}



function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    console.log(caseNewCount);
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-price').innerText = '$' + caseTotal;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    handleProductChange(true);
});

document.getElementById('phone-minuse').addEventListener('click', function () {
    handleProductChange(false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    handleCaseChange(true);
});

document.getElementById('case-minuse').addEventListener('click', function () {
    handleCaseChange(false);
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