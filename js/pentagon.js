document.getElementById('btn-pentagon').addEventListener('click',function(){
   
    const fiveName = document.getElementById('five-name').innerText;

    const inputFive = document.getElementById('input-five');
    const newInputFiveAmountString = inputFive.value;
    const newInputFiveAmount = parseFloat(newInputFiveAmountString);

    const inputSix = document.getElementById('input-six');
    const previousInputSixAmountString = inputSix.value;
    const previousInputSixthAmount = parseFloat(previousInputSixAmountString);

    inputFive.value = '';
    inputSix.value = '';
     
    const positionSixElement = document.getElementById('position-six');
    const positionSixString = positionSixElement.innerText;
    const newPositionSix = parseFloat(positionSixString);
    positionSixElement.innerText = newInputFiveAmount;

    const positionSevenElement = document.getElementById('position-seven');
    const previousPositionSevenString = positionSevenElement.innerText;
    const previousPositionSeven = parseFloat(previousPositionSevenString);
    positionSevenElement.innerText = previousInputSixthAmount;

    const positionEightElement = document.getElementById('position-eight');
    const  amountPositionEightString = positionEightElement.innerText;
    const amountPositionEight = parseFloat(amountPositionEightString);
    positionEightElement.innerText = 0.5;

    const pentagonTotalElement = document.getElementById('pentagon-total');
    const pentagonTotalString = pentagonTotalElement.innerText;
    const pentagonTotal = parseFloat(pentagonTotalString);
    const currentPentagonTotal = newInputFiveAmount * previousInputSixthAmount * amountPositionEight;
    pentagonTotalElement.innerText = currentPentagonTotal;



    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${5}</td>
    <td>${fiveName}</td>
    <td>${currentPentagonTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);

});