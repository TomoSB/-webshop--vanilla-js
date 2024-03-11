//let addCart = document.getElementsByClassName("add-cart");
//let add = document.getElementById("add-cart").innerHTML;
//console.log(addCart);




let addCart = document.getElementsByClassName("add-cart");
console.log(addCart);

for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", addFunction)
    // console.log(addCart[i]);
};

let totalPrice = 0;


function addFunction(e) {
    let itemList = document.getElementById("item-list");
    let priceList = document.getElementById("price-list");
    let value = parseFloat(e.target.parentNode.querySelector('h3').innerHTML);
    let item = e.target.parentNode.querySelector('h5').innerHTML;
    let total = document.getElementById("aa")
    console.log(typeof (value));
    //  let totalPrice = 0;

    itemList.innerHTML += `<li>${item}</li>`;
    priceList.innerHTML += `<li>${value}</li>`;
    totalPrice += value;
    total.innerHTML = `<li>${totalPrice}</li>`


}


/*
for (let i = 0; i < addCart.length; i++) {
    // Pass the index i to the addFunction when the event listener is triggered
    addCart[i].addEventListener("click", function () { addFunction(i); });
}

function addFunction(index) {
    // Now you can use the index inside addFunction
    console.log("Clicked item index:", index);
}
*/

