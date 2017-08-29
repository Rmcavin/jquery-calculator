window.onload = function() {

let expression = '';
let display = $('#screen');


$('.buttons').on("click", function(e) {
    let input = $(e.target);
    let inputText = e.target.textContent;

    if (inputText === 'C') {
      expression = '';
      display.html(expression);
     }
    else if (inputText === '=') {
      if (expression.includes('/0')) {
        display.html('Error');
        expression = "";
      }
      else {
         let equation = parseInt(expression);
         console.log(equation);
         //display.html(answer);
        // expression = answer;
       }
      }
    else if (inputText === 'x') {
         expression += '*';
         display.html(expression);
       }
    else if (inputText === '÷') {
         expression += '/';
         display.html(expression);
       }
    else {
      expression = expression + inputText;
      display.html(expression);
    }
  })
}
