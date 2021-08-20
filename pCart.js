
//method 1 failed

addBtn2.addEventListener("click", function() {
    total = total + 149.99
  dueAmnt.innerHTML = total.toFixed(2)
  
  })
  
  minusBtn2.addEventListener("click", function() {
    total = total - 149.99
  dueAmnt.innerHTML = total.toFixed(2)
  
  }) 


  //method two is too long
  addBtn2.addEventListener("click", function() {
    lQty = lQty + 1;
     LargeTotal = lQty * 149.99;
     qty3.innerHTML = lQty;
   tlPizza.innerHTML = LargeTotal.toFixed(2);
   
   })
   
   minusBtn2.addEventListener("click", function() {
   if (LargeTotal >0) {
   LargeTotal = LargeTotal - 149.99
   
   } 
   
   else {LargeTotal = 0;};
     
   tlPizza.innerHTML = LargeTotal.toFixed(2)
   
   })


   //method 3