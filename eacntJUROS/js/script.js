function calcular(){
    //puxando os inputs do html
    let capital = document.getElementById("capitalInicial").value
    let taxa = document.getElementById("taxa").value
    let tempo = document.getElementById("tempo").value
    
    //como está ocorrendo uma formatação nos valores dos inputs, aqui os valores são transformados em float
    let capitalf = capital.replace(/\D/g, '')
    capitalf=capitalf/100
    let taxaf = taxa.replace(/\D/g, '')
    taxaf=taxaf/100
    taxaf=taxaf/100
    
    //cálculos de montante(valorFinal) e vaor do juros(valorJuros)
    valorFinal = capitalf * Math.pow((1 + taxaf), tempo);

    //utilizando valorFinal antes de formatar
    valorJuros = valorFinal-capitalf

    //formatando valor final
    valorFinal = (Number(valorFinal)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    //formatando valorJuros
    valorJuros = (Number(valorJuros)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    

    //estes console.log são para testes
    console.log ("capital " + capitalf)
    console.log ("taxa " + taxaf)
    console.log ("tempo " + tempo)
    console.log (valorFinal)
    console.log (valorJuros)

    //declarar a div como uma váriavel para manipulação
    let mostrarResultado = document.getElementById("exibicoesDiv")

    //limpar a div para não stackar ul
    mostrarResultado.innerHTML=''

    //criar a ul
    let exibirVfinal = document.createElement("ul")

    //colocar uma class na ul criada acima
    exibirVfinal.classList.add('exibicoes') //predão pelo nome dessa class mais meu cereblo tá derretendo, estou a 3h nisso socorro

    //adicionar conteudo a ul, pulando uma linha
    exibirVfinal.textContent = "Valor Final\n"+valorFinal
    exibirVfinal.style.whiteSpace = "pre-line";

    //colocar a ul que criou lá em cima dentro da div
    mostrarResultado.appendChild(exibirVfinal)

    //mesma coisa do de cima
    let exibirJfinal = document.createElement("ul")
    exibirJfinal.classList.add('exibicoes')
    exibirJfinal.textContent = "Valor dos Juros\n"+valorJuros;
    exibirJfinal.style.whiteSpace = "pre-line";
    mostrarResultado.appendChild(exibirJfinal)

    valorFinal=0 //para não stackar resultado


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