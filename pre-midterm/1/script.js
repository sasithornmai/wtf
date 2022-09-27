function cal() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    document.getElementById('result').innerHTML = `Result : ${num1 + num2}`;
    let res = document.createElement('p');
    let text = document.createTextNode(`${parseInt(num1)} + ${parseInt(num2)} = ${parseInt(num1) + parseInt(num2)}`)
    res.appendChild(text);
    document.getElementById('sum').appendChild(res);
}