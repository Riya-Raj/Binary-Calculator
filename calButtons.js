var btn0 = document.getElementById('btn0');
var result = document.getElementById('res');
var btn1 = document.getElementById('btn1');
var btnClr = document.getElementById('btnClr');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');
var btnEql = document.getElementById('btnEql');
function toDecimal(binary) {
	return parseInt(binary, 2);
}
btn0.onclick = function() {
    result.innerHTML += '0';
}
btn1.onclick = function() {
    result.innerHTML += '1';
}
btnClr.onclick = function() {
    result.innerHTML = '';
}
btnSum.onclick = function() {
    result.innerHTML += '+';
}
btnSub.onclick = function() {
    result.innerHTML += '-';
}
btnMul.onclick = function() {
    result.innerHTML += '*';
}
btnDiv.onclick = function() {
    result.innerHTML += '/';
}
btnEql.onclick = function() {
	var number = /(\d+)/g;
	var ins_res = result.innerHTML;
	ins_res = ins_res.replace(number, toDecimal);
	result.innerHTML = eval(ins_res).toString(2);
}