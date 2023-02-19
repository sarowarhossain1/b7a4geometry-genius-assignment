document.getElementById('btn-rectangle').addEventListener('click',function(){

    const secondName = document.getElementById('second-name').innerText;
 
    const inputOne = document.getElementById('input-one');
    const newInputOneAmountString = inputOne.value;
    const newInputOneAmount = parseFloat(newInputOneAmountString);

    const inputTwo = document.getElementById('input-two');
    const previousInputTwoAmountString = inputTwo.value;
    const previousInputTwoAmount = parseFloat(previousInputTwoAmountString);


    inputOne.value = '';
    inputTwo.value = '';

    const depositOneElement = document.getElementById('deposit-one');
    const depositOneString = depositOneElement.innerText;
    const depositOne = parseFloat(depositOneString);
    depositOneElement.innerText = newInputOneAmount;
   
    const depositTwoElement = document.getElementById('deposit-two');
    const previousDepositTwoString = depositTwoElement.innerText;
    const previousDepositTwo = parseFloat(previousDepositTwoString);
    depositTwoElement.innerText = previousInputTwoAmount;

    


    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString );
    const currentDepositTotal = newInputOneAmount * previousInputTwoAmount ;
    depositTotalElement.innerText = currentDepositTotal;


    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${2}</td>
    <td>${secondName}</td>
    <td>${currentDepositTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);

});
