const cardNumber = document.getElementById("card-number");
const cardNumberDisplay = document.querySelectorAll(".card_numer_display");

cardNumber.addEventListener("input", () => 
{
    const inputNumber = cardNumber.value.replace(/\D/g, "");
    cardNumber.value = inputNumber.slice(0, 16);
    for (let i = 0; i < cardNumberDisplay.length; i++) 
    {
        if (i < inputNumber.length) {
            cardNumberDisplay[i].textContent = inputNumber[i];
        } else {
            cardNumberDisplay[i].textContent = "#";
        }
    }
});

const cardHolderDisplay = document.getElementById('card-holder-display');
const cardHolderInput = document.getElementById('card-holder-input');

cardHolderInput.addEventListener('input', function() {
    cardHolderDisplay.innerText = cardHolderInput.value;
});

const expiryInput = document.getElementById('expiryDate');
const validityDisplay = document.getElementById('validity');

expiryInput.addEventListener('input', function() {
    const inputValue = expiryInput.value;
    const [year, month] = inputValue.split('-');
    validityDisplay.innerText = `${month}/${year.slice(2)}`;
});

const card = document.querySelector(".credit-card");
const cvvInput = document.getElementById("cardCvv");

cvvInput.addEventListener("focus", ()=> {
    card.style.transform = "rotateY(180deg)";
})

cvvInput.addEventListener("blur", () => {
    card.style.transform = "rotateY(0deg)"; 
});

const cardCvvDisplay = document.getElementById('cvv-display');
const cardCvvInput = document.getElementById('cardCvv');

cardCvvInput.addEventListener('input', function() {
    cardCvvDisplay.innerText = cardCvvInput.value;    
});