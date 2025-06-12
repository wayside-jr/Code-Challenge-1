const userinput = prompt('unatuma ngapi?');
const amountToSend = Number(userinput);


function estimateTransactionFee () {
    ;
    let transactionFee = 0.015 * amountToSend;
    if (transactionFee < 10) 
        {transactionFee = 10}
    else if (transactionFee > 70)
        {transactionFee = 70}
           

let total = transactionFee + amountToSend
    

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`calculated transaction fee: KES ${transactionFee}`)
    console.log(`Total amount to be debited:KES ${total}`);
    console.log('\nsend money securely')
   
}
estimateTransactionFee ()
