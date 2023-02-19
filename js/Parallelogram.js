document.getElementById('btn-parallelogram').addEventListener('click',function(){
     
    const thirdName = document.getElementById('third-name').innerText;

    
    const fieldOne = document.getElementById('field-one');
    const newFieldOneAmountString = fieldOne.value;
    const newFieldOneAmount = parseFloat(newFieldOneAmountString);
    
    const fieldTwo = document.getElementById('field-two');
    const previousFieldTwoAmountString = fieldTwo.value;
    const previousFieldTwoAmount = parseFloat(previousFieldTwoAmountString);
  

    fieldOne.value = '';
    fieldTwo.value = '';


    const positionOneElement = document.getElementById('position-one');
    const positionOneString = positionOneElement.innerText;
    const newPositionOne = parseFloat(positionOneString);
    positionOneElement.innerText = newFieldOneAmount;

    const positionTwoElement = document.getElementById('position-two');
    const previousPositionTwoString = positionTwoElement.innerText;
    const previousPositionTwo = parseFloat(previousPositionTwoString);
    positionTwoElement.innerText = previousFieldTwoAmount;

    
    const parallelogramTotalElement = document.getElementById('parallelogram-total');
    const parallelogramTotalString = parallelogramTotalElement.innerText;
    const parallelogramTotal = parseFloat(parallelogramTotalString);
    const currentParallelogramTotal = newFieldOneAmount * previousFieldTwoAmount;
    parallelogramTotalElement.innerText = currentParallelogramTotal;



    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${3}</td>
    <td>${thirdName}</td>
    <td>${currentParallelogramTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);
});