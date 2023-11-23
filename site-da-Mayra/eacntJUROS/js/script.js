function calcularComposto() {
    let capital = document.getElementById("capitalInicialComposto").value;
    let taxa = document.getElementById("taxaComposto").value;
    let tempo = document.getElementById("tempoComposto").value;
    
    // formatação
    let capitalf = parseFloat(capital.replace(/\D/g, '')) / 100;
    let taxaf = parseFloat(taxa.replace(/\D/g, '')) / 100;
    
    // cálculos de montante (valorFinal) e valor dos juros (valorJuros)
    let valorFinal = capitalf * Math.pow((1 + taxaf), tempo);
    let valorJuros = valorFinal - capitalf;
    
    // formatando valor final
    valorFinal = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // formatando valorJuros
    valorJuros = valorJuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // estes console.log são para testes
    console.log("capital " + capitalf);
    console.log("taxa " + taxaf);
    console.log("tempo " + tempo);
    console.log(valorFinal);
    console.log(valorJuros);
    
    // declarar a div como uma variável para manipulação
    let mostrarResultado = document.getElementById("exibicoesDivComposto");
    
    // limpar a div para não stackar ul
    mostrarResultado.innerHTML = '';
    
    // criar a ul para o Valor Final
    let exibirVfinal = document.createElement("ul");
    exibirVfinal.classList.add('exibicoes');
    exibirVfinal.textContent = "Valor Final\n" + valorFinal;
    exibirVfinal.style.whiteSpace = "pre-line";
    mostrarResultado.appendChild(exibirVfinal);
    
    // criar a ul para o Valor dos Juros
    let exibirJfinal = document.createElement("ul");
    exibirJfinal.classList.add('exibicoes');
    exibirJfinal.textContent = "Valor dos Juros\n" + valorJuros;
    exibirJfinal.style.whiteSpace = "pre-line";
    mostrarResultado.appendChild(exibirJfinal);
    
    valorFinal = 0; // para não stackar resultado
}

function calcularSimples(){
    let capital = document.getElementById("capitalInicialSimples").value;
    let taxa = document.getElementById("taxaSimples").value;
    let tempo = document.getElementById("tempoSimples").value;
    
    //formata
    let capitalf = parseFloat(capital.replace(/\D/g, '')) / 100;
    let taxaf = parseFloat(taxa.replace(/\D/g, '')) / 100;
        
    //cálculos de montante(valorFinal) e valor do juros(valorJuros)
    let valorFinal = capitalf + (capitalf * taxaf * tempo);
    let valorJuros = valorFinal - capitalf;
    
    //formatando valor final
    valorFinal = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    //formatando valorJuros
    valorJuros = valorJuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    //estes console.log são para testes
    console.log ("capital " + capitalf);
    console.log ("taxa " + taxaf);
    console.log ("tempo " + tempo);
    console.log (valorFinal);
    console.log (valorJuros);
    
    //declarar a div como uma variável para manipulação
    let mostrarResultado = document.getElementById("exibicoesDivSimples");
    
    //limpar a div para não stackar ul
    mostrarResultado.innerHTML = '';
    
    //criar a ul para o Valor Final
    let exibirVfinal = document.createElement("ul");
    exibirVfinal.classList.add('exibicoes');
    exibirVfinal.textContent = "Valor Final\n" + valorFinal;
    exibirVfinal.style.whiteSpace = "pre-line";
    mostrarResultado.appendChild(exibirVfinal);
    
    //criar a ul para o Valor dos Juros
    let exibirJfinal = document.createElement("ul");
    exibirJfinal.classList.add('exibicoes');
    exibirJfinal.textContent = "Valor dos Juros\n" + valorJuros;
    exibirJfinal.style.whiteSpace = "pre-line";
    mostrarResultado.appendChild(exibirJfinal);
    
    valorFinal = 0; //para não stackar resultado
}


function formatarComoDinheiro(input) {
    // Obtém o valor atual do input
    let valor = input.value;

    // Remove caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Formata como dinheiro (adiciona ponto e vírgula)
    valor = (Number(valor) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Define o valor formatado de volta no input
    input.value = valor;
}

function formataComoTaxa(input) {
    let valor = input.value
    valor = valor.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2);
    input.value = '% ' + valor 
}