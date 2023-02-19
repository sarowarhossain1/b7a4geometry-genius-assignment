document.getElementById('btn-triangle').addEventListener('click',function(){

    const firstName = document.getElementById('first-name').innerText;
 
    const inputFirst = document.getElementById('input-first');
    const newInputFirstAmountString = inputFirst.value;
    const newInputFirstAmount = parseFloat(newInputFirstAmountString);

    const inputSecond= document.getElementById('input-second');
    const previousInputSecondAmountString = inputSecond.value;
    const previousInputSecondAmount = parseFloat(previousInputSecondAmountString);


    inputFirst.value = '';
    inputSecond.value = '';

    const totalTwoElement = document.getElementById('total-two');
    const totalTwoString = totalTwoElement.innerText;
    const newTotalTwo = parseFloat(totalTwoString);
    totalTwoElement.innerText = newInputFirstAmount;
   
    const totalThreeElement = document.getElementById('total-three');
    const previousTotalThreeString = totalThreeElement.innerText;
    const previousTotalThree = parseFloat(previousTotalThreeString);
    totalThreeElement.innerText = previousInputSecondAmount;

    const totalOneElement = document.getElementById('total-one');
    const  amountTotalOneString = totalOneElement.innerText;
    const amountTotalOne = parseFloat(amountTotalOneString);
    totalOneElement.innerText = 0.5;


    const triangleTotalElement = document.getElementById('triangle-total');
    const triangleTotalString = triangleTotalElement.innerText;
    const triangleTotal = parseFloat(triangleTotalString);
    const currentTriangleTotal = newInputFirstAmount * previousInputSecondAmount * amountTotalOne;
    triangleTotalElement.innerText = currentTriangleTotal;


    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${1}</td>
    <td>${firstName}</td>
    <td>${currentTriangleTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);

});