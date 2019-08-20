$(document).ready(function(){
    $(".calculator-buttons button").click(function(e){
        const buttonValue = e.target.innerHTML;
        const display = $(".calculator-display input");
        const charLastIndex = display.val().charAt(display.val().length-1);
        const charFirstInput = buttonValue
        if(display.val() == "" && "%*/+-".includes(buttonValue)){
            display.val("");
            return;
        } 
        switch(buttonValue){
            case 'C': display.val(""); break;
            case '=': display.val(calculate(display.val())); break;
            case 'x': buttonValue = '*';
            default : const displayValue = display.val()+buttonValue;
            display.val(displayValue); break;
        }
        
    }); 
});
function calculate(string){
    var answer = eval(string);
    console.log(answer);
    var pointLastIndex = answer.toString().lastIndexOf(".");
    var difference = answer.toString().length-1 - pointLastIndex;
    if(difference > 5){
        answer = answer.toString().slice(0,pointLastIndex+5);
    }
    $(".calculator-history span").text(string);
    return answer;
}

