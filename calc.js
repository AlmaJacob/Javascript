function add(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1+no2
}

function sub(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1-no2
}

function mul(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1*no2
}

function div(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1/no2
}

function modulas(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1%no2
}