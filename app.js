function add(){
    //console.log('I am here')
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('num2').value)
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x+y
    z= z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML=
    `<h3>Result:` +String(z)+`</h3>`

}

function sub(){
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('num2').value)
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x-y
    z= z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML=
    `<h3>Result:` +String(z)+`</h3>`

}
function mult(){
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('num2').value)
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x*y
    z= z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML=
    `<h3>Result:` +String(z)+`</h3>`
}
function divide(){
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('num2').value)
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x/y
    z= z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML=
    `<h3>Result:` +String(z)+`</h3>`
}
