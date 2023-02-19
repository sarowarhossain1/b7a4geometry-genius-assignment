document.getElementById('btn-rhombus').addEventListener('click',function(){
   
     
    const fourthName = document.getElementById('fourth-name').innerText;


    const inputThree = document.getElementById('input-three');
    const newInputThreeAmountString = inputThree.value;
    const newInputThreeAmount = parseFloat(newInputThreeAmountString);

    const inputFourth = document.getElementById('input-fourth');
    const previousInputFourthAmountString = inputFourth.value;
    const previousInputFourthAmount = parseFloat(previousInputFourthAmountString);

    
    inputThree.value = '';
    inputFourth.value = '';


    const positionThreeElement = document.getElementById('position-three');
    const positionThreeString = positionThreeElement.innerText;
    const newPositionOne = parseFloat(positionThreeString);
    positionThreeElement.innerText = newInputThreeAmount;


    const positionFourthElement = document.getElementById('position-fourth');
    const previousPositionFourthString = positionFourthElement.innerText;
    const previousPositionFourth = parseFloat(previousPositionFourthString);
    positionFourthElement.innerText = previousInputFourthAmount;

    const positionFiveElement = document.getElementById('position-five');
    const  amountPositionFiveString = positionFiveElement.innerText;
    const amountPositionFive = parseFloat(amountPositionFiveString);
    positionFiveElement.innerText = 0.5;

    
    const rhombusTotalElement = document.getElementById('rhombus-total');
    const rhombusTotalString = rhombusTotalElement.innerText;
    const rhombusTotal = parseFloat(rhombusTotalString);
    const currentRhombusTotal = newInputThreeAmount * previousInputFourthAmount * amountPositionFive;
    rhombusTotalElement.innerText = currentRhombusTotal;


    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${4}</td>
    <td>${fourthName}</td>
    <td>${currentRhombusTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);

});