const Div1 = document.getElementById("first")
const Div2 = document.getElementById("second")
const Div3 = document.getElementById("third")
 const img = document.getElementById("art")
 const productPrice = document.getElementById("price")
 const freeshipping = document.getElementById("free-ship")
 const expressShip = document.getElementById('express-ship')
 const fee = document.getElementById("fee")
 const total = document.getElementById("total")
 const desc = document.getElementById("desc")


 Div1.addEventListener("click",function(){
desc.innerText = "porem mama 1 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi!"
productPrice.innerText = 500
    img.src = "images/1.jpg"
   const priceValue = productPrice.innerText;
   total.innerText = priceValue;
   
 })
 Div2.addEventListener("click",function(){
    desc.innerText = "porem mama 1 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, i!"
    productPrice.innerText = 300
    img.src = "images/2.jpg"
    const priceValue = productPrice.innerText;
    total.innerText = priceValue;
    fee.innerText = "0"
 })
 Div3.addEventListener("click",function(){
    desc.innerText = " mama 1 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi!"
    productPrice.innerText = 400
    img.src = "images/3.jpg"
    const priceValue = productPrice.innerText;
    total.innerText = priceValue;
    fee.innerText = "0"
 })
function totalFee(fees){
    fee.innerText = fees
    totalfee() 
}
//  freeshipping.addEventListener("click",function(){
// fee.innerText = 5
// totalfee()

// })
// expressShip.addEventListener("click",function(){
// fee.innerText = 30
// totalfee()
// ()
    
// })
function totalfee(){
const productFee = fee.innerText;
const price = productPrice.innerText;
const totalPrice = parseInt(productFee) + parseInt(price);
total.innerText = totalPrice;

}

document.getElementById("buy").addEventListener( "click",function(){

    alert("congrats mem/sir your order is confirmed.")
})













//  step 1 img er click korle source change hobe.
// step img er description and price change korbo..
//  description and price chnage korbo img er.mane uporer innertext chnage hobe

// freeshiping e click korle shipping feee change hobe..mane innertext chnage hobe 
//  total price update hobe...product price onujai..