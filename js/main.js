let num = NaN,
  res = NaN,
  operator="",
  clearNeedFlag=false;
function AddNum(Operator)
{
  num = document.getElementById('input-number').value;
  Calculator(operator);
  Set_Result();
  operator = Operator;
  clearNeedFlag = true;
}
function Set_Result()
{
  document.getElementById('input-number').value = res;
}
function Calculator(operator)
{
  switch (operator) {
    case "+": res = parseFloat(res)+ parseFloat(num) ; break;
    case "-": res = parseFloat(res)- parseFloat(num) ; break;
    case "×": res = parseFloat(res)* parseFloat(num) ; break;
    case "÷": res = parseFloat(res)/ parseFloat(num) ; break;
    default : res = num;
  }
}
function Clear()
{
  if(operator!="")
  {
    num = document.getElementById('input-number').value;
    Calculator(operator);
    Set_Result();
  }
  num = NaN;
  res = NaN;
  operator="";
  clearNeedFlag = true;
}
function full_Clear()
{
  document.getElementById('input-number').value = "";
  num = NaN;
  res = NaN;
  operator="";
  clearNeedFlag = true;
}
function SetNumber(value)
{
  if(clearNeedFlag)
  {
    document.getElementById('input-number').value = value;
    clearNeedFlag = false;
  }
  else {
    document.getElementById('input-number').value += value;
  }
}
