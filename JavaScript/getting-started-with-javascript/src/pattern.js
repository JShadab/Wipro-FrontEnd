
/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(row) {
  // Provide Solution Code Here
  if(typeof row != 'number')
  {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }
  else
  {
    let string = "";
    for(let i=1; i<=row;i++)
    {
      for(let k=1; k<=(row-i); k++)
      {
        string+=(" ");
      }
      for(let j=1;j<=i;j++)
      {
        string+= ("* ");
      }
      string+="\n"; 
    }
    return string;
  }

}