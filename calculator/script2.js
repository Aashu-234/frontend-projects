function Solve(val)
{
    var v = document.getElementById('result');
    v.value += val;
}
function Result()
{
    var v1 = document.getElementById('result').value;
    var v2 = eval(v1);
    document.getElementById('result').value = v2;
}
function Clear()
{
    var input = document.getElementById('result');
    input.value ='';
}
function Back()
{
    var rr = document.getElementById('result');
    rr.value = rr.value.slice(0,-1);
}