function cal() {
    var oper1=document.getElementById("number1");//Get number 1
    var oper2=document.getElementById("number2");//Get number2
    var o=document.getElementById("operator");
    var op=o.options[o.selectedIndex].value;
    var res;

    switch (op) {
        case "+":
            res=change(oper1.value)+change(oper2.value);
            break;
        case "-":
            res=change(oper1.value)-change(oper2.value);
            break;
        case "*":
            res=change(oper1.value)*change(oper2.value);
            break;
        case "/":
            res=change(oper1.value)/change(oper2.value);
            break;

    }

    document.getElementById("anw").value=res;
}
function change(x) {
    return parseFloat(x);

}