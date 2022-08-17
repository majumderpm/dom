

document.getElementById('btn_deposit').addEventListener('click', function(){
    // console.log('my deposit')

    const depositFild = document.getElementById('deposit-ammount');
    const newDepositeAmountString = depositFild.value;

    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // console.log(depositeAmount)

    const depositeTotalAmmount = document.getElementById('deposit_total');
    const previesDepositeTotalString = depositeTotalAmmount.innerText;

    const previesDepositeTotal = parseFloat(previesDepositeTotalString);

    const currentDepositeTotal = previesDepositeTotal + newDepositeAmount;

     depositeTotalAmmount.innerText = currentDepositeTotal;
   



    // balance total amount work 

    const balanceTotalElement = document.getElementById('balance-total');
    const previesBalanceTotalString = balanceTotalElement.innerText;
    const previesBalanceTotal = parseFloat(previesBalanceTotalString);

    // calculate current total balance

    const currentBalanceTotal = previesBalanceTotal + newDepositeAmount;
   balanceTotalElement.innerText = currentBalanceTotal;




     
     depositFild.value = '';
})