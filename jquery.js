function calcularAreaTrapezio() {
    var baseMenor = parseFloat($("#baseMenor").val());
    var baseMaior = parseFloat($("#baseMaior").val());
    var altura = parseFloat($("#altura").val());

    var area = (baseMenor + baseMaior) / 2 * altura;

    $("#resultadoTrapezio").text("A área do trapézio é: " + area);

    console.log("Valores do trapézio:");
    console.log("Base Menor:", baseMenor);
    console.log("Base Maior:", baseMaior);
    console.log("Altura:", altura);
    console.log("A área do trapézio é:", area);
  }

  function calcularAreaParalelogramo() {
    var base = parseFloat($("#base").val());
    var altura = parseFloat($("#altura").val());

    var area = base * altura;

    $("#resultadoParalelogramo").text("A área do paralelogramo é: " + area);

    console.log("Valores do paralelogramo:");
    console.log("Base:", base);
    console.log("Altura:", altura);
    console.log("A área do paralelogramo é:", area);
  }

  function calcularAreaLosango() {
    var diagonalMaior = parseFloat($("#diagonalMaior").val());
    var diagonalMenor = parseFloat($("#diagonalMenor").val());

    var area = (diagonalMaior * diagonalMenor) / 2;

    $("#resultadoLosango").text("A área do losango é: " + area);

    console.log("Valores do losango:");
    console.log("Diagonal Maior:", diagonalMaior);
    console.log("Diagonal Menor:", diagonalMenor);
    console.log("A área do losango é:", area);
  }