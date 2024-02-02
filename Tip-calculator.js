const amountEnteredElem = document.getElementById('amountEntered')
const tipPercentAmountElem = document.getElementById('tipPercentAmount')
const tipAmountElem = document.getElementById('tipAmount')
const tipPercentInputElem = document.getElementById('tipPercentInput')
const enterAmountElem = document.getElementById('enterAmount')
const calculateAmountElem = document.getElementById('calculateAmount')
const resetBtnElem = document.getElementById('resetBtn')
const changeThemeElem = document.getElementById('themeChangeBtn')
const contentDivElem = document.querySelector('.js-contentDiv')
const errorMessageElem = document.getElementById('errorMessage')
const peoplePayingElem = document.getElementById('peoplePaying')


tipAmountElem.innerHTML=`Total for each person: $`
tipPercentAmountElem.innerHTML=`You want to tip:`
amountEnteredElem.innerHTML=`Amount entered: $`

resetBtnElem.addEventListener('click',() => {
    tipAmountElem.innerHTML=`Total for each person: $`
    tipPercentAmountElem.innerHTML=`You want to tip:`
    amountEnteredElem.innerHTML=`Amount entered: $`
    enterAmountElem.value=''
    tipPercentInputElem.value=''
})

changeThemeElem.addEventListener('click',() => {
    document.body.classList.toggle('darkTheme');
})

calculateAmountElem.addEventListener('click',() => {
   
    var tipPercentAmount=Number(tipPercentInputElem.value)
    var amountEntered=Number(enterAmountElem.value)
    var peoplePaying=Number(peoplePayingElem.value)
    
    if(amountEntered === 0 || tipPercentAmount === 0 || amountEntered < 0 || tipPercentAmount <= 0 || peoplePaying <= 0){
        errorMessageElem.innerHTML='All fields must be filled out using numbers higher than 0'
    }else{
         
    tipAmountElem.innerHTML=`Total for each person: $${calculateTipAmount(amountEntered,tipPercentAmount,peoplePaying)}`;
    tipPercentAmountElem.innerHTML=`You want to tip: ${tipPercentAmount}%`
    amountEnteredElem.innerHTML=`Amount entered: $${amountEntered}`
    errorMessageElem.innerHTML='';
    }

})

function calculateTotalBill(amountEntered,tipPercentAmount){
    var tipAmount = amountEntered*(tipPercentAmount/100)
    var totalBill = tipAmount+amountEntered
    return totalBill
}

function calculateTipAmount(amountEntered,tipPercentAmount,peoplePaying){
    var totalBill = calculateTotalBill(amountEntered,tipPercentAmount)
    var individualTip = totalBill/peoplePaying
    var roundedIndivdualTip = individualTip.toFixed(2)
    return parseFloat(roundedIndivdualTip)
}
