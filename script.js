function mostrarAlerta()
{
    alert("Bom dia Turma do 2 ano Exatas")
}

function pedirNome()
{
    let nome = prompt("informe seu nome: ")
    alert("Bom dia, " + nome )
}

function somarNumeros()
{
    let primeirovalor = Number(prompt("Informe o primeiro Número: "))
    let segundovalor = Number(prompt("Informe o segundo Número"))
    let soma = primeirovalor + segundovalor
    alert("A soma dos números é: " + soma)
}

function mudarFormatacao() 
{
    let resultado = document.getElementById("resultado")
    let nome = prompt("Informe o seu nome: ")
    resultado.textContent = " Bom dia! " + nome
    resultado.style.background = "pink"
}