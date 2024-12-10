

function sample(){
    let salary=parseInt(document.getElementById("salary").value)
    let year_of_service=parseInt(document.getElementById("year of services").value)
    let h2=document.getElementById("total")
    if(year_of_service>5){
    let a=0.05
    let total=a+salary
        h2.innerHTML=total
    }
    else{
         h2.innerHTML='you are not eligible fore the bonus'
    }

}
