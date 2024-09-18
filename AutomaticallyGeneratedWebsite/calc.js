    let calculationValue;
    document.getElementById("+").addEventListener("click",function add(){
        const x = Number(document.getElementById("6").value)
        const y = Number(document.getElementById("7").value)
        calculationValue = x+y
        document.getElementById('8').innerText = calculationValue
    })
    document.getElementById("-").addEventListener("click",function sub(){
        const x = document.getElementById("6").value
        const y = document.getElementById("7").value
        calculationValue = x-y
        document.getElementById('8').innerText = calculationValue
    })
    document.getElementById("*").addEventListener("click",function mul(){
        const x = document.getElementById("6").value
        const y = document.getElementById("7").value
        calculationValue = x*y
        document.getElementById('8').innerText = calculationValue
    })
    document.getElementById("/").addEventListener("click",function div(){
        const x = document.getElementById("6").value
        const y = document.getElementById("7").value
        calculationValue = x/y
        document.getElementById('8').innerText = calculationValue
    })
