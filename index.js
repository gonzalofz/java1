window.onload= function () {
    const valor = 45000;
    btncalcula = document.querySelector("#boton").addEventListener("click",calcula);
  
    function calcula(){
     const cantidad = document.getElementById("cantidad").value;
     colorcepa = document.getElementById("cepa").value;
     let resultado = cantidad * valor;
    
     if (colorcepa.toLowerCase() == "tinto"){
        document.getElementById("circulof").style.backgroundColor = "red";
       }else if (colorcepa.toLowerCase() == "rose"){
       document.getElementById("circulof").style.backgroundColor = "pink";
       }else if (colorcepa.toLowerCase() == "blanco"){
        document.getElementById("circulof").style.backgroundColor = "yellow";
       }else
       document.getElementById("circulof").style.backgroundColor = "black";
     
      document.getElementById('lblresultado').innerText = resultado;
    }


}