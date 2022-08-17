


document.getElementById('btn_withdraw').addEventListener('click', function(){
    // console.log('hiii')

    const withdrawFild = document.getElementById('withdraw-ammount');
    const newDepositeAmountString = withdrawFild.value;
    // console.log(newDepositeAmountString);

    const newWithdrawAmount = parseFloat(newDepositeAmountString);

    //setp-3 get the withdraw valu

    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previesWithdrawTotalString = withdrawTotalElement.innerText;
    const previesWithdrawAmount = parseFloat(previesWithdrawTotalString);
    
    //  step -4 caculate total withdraw amount

    const currentWithdrawTotal = previesWithdrawAmount + newWithdrawAmount;

    // step-5 set the man withdraw amount

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step -6 balance total amount

    const balanceTotalElement = document.getElementById('balance-total');
    const previesBalanceTotalString = balanceTotalElement.innerText;
    const previesBalanceTotal = parseFloat(previesBalanceTotalString);

    const currentBalanceTotal = previesBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //  step-7 blank the input fild
    withdrawFild.value = '';

})