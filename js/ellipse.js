document.getElementById('btn-ellipse').addEventListener('click',function(){
   
    const sixName = document.getElementById('six-name').innerText;
    
    const inputNine = document.getElementById('input-nine');
    const newInputNineAmountString = inputNine.value;
    const newInputNineAmount = parseFloat(newInputNineAmountString);

    const inputTen= document.getElementById('input-ten');
    const previousInputTenAmountString = inputTen.value;
    const previousInputTenAmount = parseFloat(previousInputTenAmountString);
  
    inputNine.value = '';
    inputTen.value = '';

    const positionThirteenElement = document.getElementById('position-thirteen');
    const positionThirteenString = positionThirteenElement.innerText;
    const newPositionThirteen = parseFloat(positionThirteenString);
    positionThirteenElement.innerText = newInputNineAmount;

    const positionTwelveElement = document.getElementById('position-twelve');
    const previousPositionTwelveString = positionTwelveElement.innerText;
    const previousPositionTwelve = parseFloat(previousPositionTwelveString);
    positionTwelveElement.innerText = previousInputTenAmount;

    const positionElevenElement = document.getElementById('position-eleven');
    const  amountPositionElevenString = positionElevenElement.innerText;
    const amountPositionEleven = parseFloat(amountPositionElevenString);
    positionElevenElement.innerText =3.14;



    const ellipseTotalElement = document.getElementById('ellipse-total');
    const ellipseTotalString = ellipseTotalElement.innerText;
    const ellipseTotal = parseFloat(ellipseTotalString);
    const currentEllipseTotal = newInputNineAmount * previousInputTenAmount * amountPositionEleven;
    ellipseTotalElement.innerText = currentEllipseTotal;

    const centimeterOne = document.getElementById('centimeter-one').innerText;
    const centimeterTwo = document.getElementById('centimeter-two').innerText;
    const totalCentimeter = centimeterOne +centimeterTwo;


    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${6}</td>
    <td>${sixName}</td>
    <td>${currentEllipseTotal}${totalCentimeter}</td>
    
`;
container.appendChild(tr);
});