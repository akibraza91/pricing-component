const myInput = document.getElementById("rangeInput");
const billingIcon = document.querySelector('.billing');
const myBundle = document.getElementById('bundle');
const activePrice = document.getElementById("active-price")
const discount = document.getElementById('discount');

const screenWidth = window.screen.width;

myInput.oninput = function(){
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%)' + value + '%)';
    
    if(billingIcon.classList.contains('active')){
        activePrice.textContent = "$" + (this.value * 2) + ".00";
    }else{
        activePrice.textContent = "$" + this.value + ".00";
    }
}

billingIcon.addEventListener("click", (e) => {
    e.preventDefault();
    billingIcon.classList.toggle('active');

    if(billingIcon.classList.contains('active')){
        myBundle.textContent = "yearly";
        activePrice.textContent = "$" + (myInput.value * 2) + ".00";
    }else{
        myBundle.textContent = "monthly";
        activePrice.textContent = "$" + myInput.value + ".00";
    }
});

if(screenWidth <= 600){
    discount.textContent = "25%";
}else{
    discount.textContent = "25% discount";
}