

document.getElementById('btn_deposit').addEventListener('click', function(){
    // console.log('my deposit')

    const depositFild = document.getElementById('deposit-ammount');
    const depositeAmount = depositFild.value;
    // console.log(depositeAmount)

    const depositeTotalAmmount = document.getElementById('deposit_total');
    const previesDepositeTotal = depositeTotalAmmount.innerText;

    // const currentDepositeTotal = depositeTotalAmmount + newDepositAmount;

     depositeTotalAmmount.innerText = depositeAmount;

     
     depositFild.value = '';
})