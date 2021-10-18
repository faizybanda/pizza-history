//sidemenuebar
document.querySelector(".minimenue").addEventListener('click', () => {
document.querySelector(".sideBar").classList.toggle("change")
}) 

// checkout,minus,add,amnt 1

const bigButton = document.querySelector(".Mbutton");
const minusBtn = document.querySelector(".minusBtn");
const addBtn = document.querySelector(".addBtn");
var dueAmnt = document.querySelector(".due");

var wholeCart = document.querySelector(".pizzaCart");

//checkout,minus,add,amnt 2

const faka1 = document.querySelector(".faka1");
const minusBtn1 = document.querySelector(".kipa1");
const addBtn2 = document.querySelector(".faka2");
const minusBtn2 = document.querySelector(".kipa2");
var total = 0.00;

// checkout,minus,add,amnt 3
const check1 = document.querySelector(".addButton3");
const check2 = document.querySelector(".addButton4");
const check3 = document.querySelector(".addButton5");

//functionality
const tsPizza = document.querySelector(".spza");
const tmPizza = document.querySelector(".mpza");
const tlPizza = document.querySelector(".lpza");
const Pay = document.querySelector(".payButton");
const insAmnt = document.querySelector(".insertAmnt")
const messageElem = document.querySelector(".message") //failed message

const qty = document.querySelector(".sqPiza");
const qty2 = document.querySelector(".mqPiza");
const qty3 = document.querySelector(".lqPiza");

const payDivElem = document.querySelector(".payDiv");
const checkoutDivElem = document.querySelector(".checkoutDiv");



var sQty = 0;
var mQty = 0;
var lQty = 0;
var paytag = 0;
var insTotal2 = 0;

var SmallTotal = 0;
var Mediumtotal = 0;
var LargeTotal = 0;


// checkout button

bigButton.addEventListener("click", function () {
  payDivElem.classList.remove("hidden");
  insAmnt.classList.remove("hidden");
  bigButton.classList.add("hidden");

})

//------pay button that shows the combined values before payement


Pay.addEventListener("click", function () {
  //console.log(insAmnt.innerHTML + insAmnt.innerHTML);
  var insTotal = insAmnt.value;


  insTotal - paytag;

  if (insTotal < paytag) {
    messageElem.classList.remove("hidden")
    messageElem.innerHTML = "INSUFFICIENT FUNDS"
    //alert("insufficen funds");
    setTimeout(function () {

      messageElem.classList.add("hidden")

    }, 3000);

  }

  else {
    messageElem.classList.remove("hidden");
    insTotal2 = insTotal - paytag;
    messageElem.innerHTML = "Thank you, Your Change is R" + insTotal2.toFixed(2);

    setTimeout(function () {

      messageElem.classList.add("hidden")

    }, 3000);
    //alert("Proceed to Checkout");
    //insTotal - paytag;
    // Pay.classList.remove(".hidden");
  };

})

//else  alert("insufficient funds") ;

//small

addBtn.addEventListener("click", function () {
  addBtn.classList.remove("hidden");
  sQty = sQty + 1;
  SmallTotal = sQty * 49.99;
  qty.innerHTML = sQty;
  tsPizza.innerHTML = SmallTotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  // addBtn.classList.remove("hidden");
})
bigButton
minusBtn.addEventListener("click", function () {

  if (sQty > 0) {
    sQty = sQty - 1;



  }

  else { sQty = 0; };
  SmallTotal = sQty * 49.99;
  qty.innerHTML = sQty;


  tsPizza.innerHTML = SmallTotal.toFixed(2)
  paytag = SmallTotal + Mediumtotal + LargeTotal
  dueAmnt.innerHTML = paytag.toFixed(2)
})




// medium


//trial





//end

faka1.addEventListener("click", function () {
  mQty = mQty + 1;
  Mediumtotal = mQty * 79.99;
  qty2.innerHTML = mQty;
  tmPizza.innerHTML = Mediumtotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  bigButton.classList.add(".hidden");
})

minusBtn1.addEventListener("click", function () {
  if (mQty > 0) {

    mQty = mQty - 1;



  }

  else { mQty = 0; };
  qty2.innerHTML = mQty;
  Mediumtotal = mQty * 79.99;
  tmPizza.innerHTML = Mediumtotal.toFixed(2)
  paytag = SmallTotal + Mediumtotal + LargeTotal
  dueAmnt.innerHTML = paytag.toFixed(2)

})


// large

addBtn2.addEventListener("click", function () {
  lQty = lQty + 1;
  LargeTotal = lQty * 149.99;
  qty3.innerHTML = lQty;
  tlPizza.innerHTML = LargeTotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  bigButton.classList.remove(".Mbutton");
})

minusBtn2.addEventListener("click", function () {
  if (lQty > 0) {

    lQty = lQty - 1;




  }

  else { lQty = 0; };
  qty3.innerHTML = lQty;
  LargeTotal = lQty * 149.99;
  tlPizza.innerHTML = LargeTotal.toFixed(2)
  paytag = SmallTotal + Mediumtotal + LargeTotal
  dueAmnt.innerHTML = paytag.toFixed(2)
})




// 4

// add to cart buttons - small 









//-B

check1.addEventListener("click", function () {
  //check1.classList.remove(".hidden2");
  sQty = sQty + 1;
  SmallTotal = sQty * 49.99;
  qty.innerHTML = sQty;
  tsPizza.innerHTML = SmallTotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  bigButton.classList.remove(".hidden");

  
  //////


})


//////my own hide trick(how to hide sections)
document.querySelector(".addButton3").addEventListener('click', () => {
  document.querySelector(".pizzaCart").classList.remove("hidden2")
  }); 

  document.querySelector(".addButton4").addEventListener('click', () => {
    document.querySelector(".pizzaCart").classList.remove("hidden2")
    }); 

    document.querySelector(".addButton5").addEventListener('click', () => {
      document.querySelector(".pizzaCart").classList.remove("hidden2")
      }); 

////endz/////



// add to cart buttons - medium

check2.addEventListener("click", function () {
  mQty = mQty + 1;
  Mediumtotal = mQty * 79.99;
  qty2.innerHTML = mQty;
  tmPizza.innerHTML = Mediumtotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  bigButton.classList.remove(".hidden");
})

// add to cart buttons - large

check3.addEventListener("click", function () {
  lQty = lQty + 1;
  LargeTotal = lQty * 149.99;
  qty3.innerHTML = lQty;
  tlPizza.innerHTML = LargeTotal.toFixed(2);
  paytag = SmallTotal + Mediumtotal + LargeTotal;
  dueAmnt.innerHTML = paytag.toFixed(2);
  bigButton.classList.remove(".hidden");

})





var pizaElem = document.querySelector(".addbutton")
var pizaElem = document.querySelector(".pizzaCart")

console.log(bigButton);
console.log(minusBtn);
console.log(addBtn);
console.log(dueAmnt);
console.log(faka1);
console.log(minusBtn1);
console.log(Pay);
//let minusBtn = 0;
//let addBtn = 49.99

//function to() {

//function addBtn() {
  //addBtn += 49.99
//};

//function minusBtn() {
  //addBtn -= 49.99
//};

//};

//pizaElem.innerHTML(".amountDue")
//const pizzaCart = pizzaCart()
//pizzaCart.addBtn();
//pizzaCart.minusBtn()

//pizzaCart.dueAmnt();

