/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/
module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {

  // Provide Solution Code Here
  if (typeof pricePerKilo === 'string' || typeof quantityInKilo === 'string' || typeof discountPercentage === 'string')
    return "Invalid Input Types, All Inputs Should Be of Type Number !!";
  else {

    const totalPrice = pricePerKilo * quantityInKilo
    const discount = (totalPrice * discountPercentage) / 100

    const ans =  totalPrice - discount;
    return ans.toString();
  }
}