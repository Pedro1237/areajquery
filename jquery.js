var banco = ["trapezio", "losango", "paralelogramo"];

$(document).ready(function() {
    function calcularAreaLosango() {
        var diagonalMaior = parseFloat($("#diagonalMaior").val());
        var diagonalMenor = parseFloat($("#diagonalMenor").val());
        var area = (diagonalMaior * diagonalMenor) / 2;
        $("#resultadoLosango").text("A área do losango é: " + area);
        
}
    function calcularAreaParalelogramo() {
        var base = parseFloat($("#base").val());
        var altura = parseFloat($("#altura").val());
        var area = base * altura;
        $("#resultadoParalelogramo").text("A área do paralelogramo é: " + area);
        
 }
    
    function calcularAreaTrapezio() {
        var baseMenor = parseFloat($("#baseMenor").val());
        var baseMaior = parseFloat($("#baseMaior").val());
        var altura = parseFloat($("#altura").val());
        var area = (baseMenor + baseMaior) / 2 * altura;
        $("#resultadoTrapezio").text("A área do trapézio é: " + area);
        
     
    }
    
    $("#calcularLosango").click(function() {
        calcularAreaLosango();
    });
    
    $("#calcularParalelogramo").click(function() {
        calcularAreaParalelogramo();
    });
    
    $("#calcularTrapezio").click(function() {
        calcularAreaTrapezio();
    });
});
function mostrarDadosTrapezio() {
  var baseMenor = parseFloat($("#baseMenor").val());
  var baseMaior = parseFloat($("#baseMaior").val());
  var altura = parseFloat($("#altura").val());
  var area = (baseMenor + baseMaior) / 2 * altura;

  console.log("Medidas do trapézio:");
  console.log("Base Menor:", baseMenor);
  console.log("Base Maior:", baseMaior);
  console.log("Altura:", altura);
  console.log("Área:", area);
}

function mostrarDadosLosango() {
  var diagonalMaior = parseFloat($("#diagonalMaior").val());
  var diagonalMenor = parseFloat($("#diagonalMenor").val());
  var area = (diagonalMaior * diagonalMenor) / 2;

  console.log("Medidas do losango:");
  console.log("Diagonal Maior:", diagonalMaior);
  console.log("Diagonal Menor:", diagonalMenor);
  console.log("Área:", area);
}

function mostrarDadosParalelogramo() {
  var base = parseFloat($("#base").val());
  var altura = parseFloat($("#altura").val());
  var area = base * altura;

  console.log("Medidas do paralelogramo:");
  console.log("Base:", base);
  console.log("Altura:", altura);
  console.log("Área:", area);
}
