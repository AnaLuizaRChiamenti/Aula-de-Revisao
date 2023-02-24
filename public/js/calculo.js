"use strict";
const botaoSubmit = document.getElementById('btn_calcular');
botaoSubmit.addEventListener('click', calcular);
function calcular() {
    const valorBase = document.getElementById("valor_base").value;
    const valorTransporte = document.getElementById("valor_transporte").value;
    const valorAlimetacao = document.getElementById("valor_alimentacao").value;
    const valorReceitaTotal = document.getElementById('valor_receita');
    const valorReceita = Number(valorBase) + Number(valorTransporte) + Number(valorAlimetacao);
    valorReceitaTotal.value = `${valorReceita}`; // colocamos assim pois a propriedade HTMLInputElemento aceita apenas string
    const valorAutomovel = document.getElementById("valor_automovel").value;
    const valorFaltas = document.getElementById("faltas").value;
    const valorDescontos = document.getElementById("valor_descontos");
    const descontosTotal = Number(valorAutomovel) + Number(valorFaltas);
    valorDescontos.value = `${descontosTotal}`;
    const valorTotal = document.getElementById("valor_total"); // quando precisamos colocar um valor no html não se usa o .value na captura do ID
    valorTotal.value = `${valorReceita - descontosTotal}`;
    const dados = {
        despesas: {
            valorAutomovel: Number(valorAutomovel),
            valorFaltas: Number(valorFaltas),
            totalDespesas: descontosTotal,
        },
        receitas: {
            valorBase: Number(valorBase),
            valorTransporte: Number(valorTransporte),
            valorAlimetacao: Number(valorAlimetacao),
            totalReceitas: descontosTotal,
        },
        totalGeral: valorReceita - descontosTotal,
    };
    //guardar a info no localStorage
    localStorage.setItem('dados', JSON.stringify(dados));
}
document.addEventListener("DOMContentLoaded", () => {
    let dados = localStorage.getItem('dados');
    if (dados) {
        const dadosConvertido = JSON.parse(dados);
        dadosConvertido.receitas.valorBase;
        const valorBase = document.getElementById("valor_base");
        valorBase.value = `${dadosConvertido.receitas.valorBase}`;
        const valorTransporte = document.getElementById("valor_transporte");
        valorTransporte.value = `${dadosConvertido.receitas.valorTransporte}`;
        const valorAlimetacao = document.getElementById("valor_alimentacao");
        valorAlimetacao.value = `${dadosConvertido.receitas.valorAlimetacao}`;
        const valorReceitaTotal = document.getElementById('valor_receita');
        valorReceitaTotal.value = `${dadosConvertido.receitas.totalReceitas}`;
        const valorAutomovel = document.getElementById("valor_automovel");
        valorAutomovel.value = `${dadosConvertido.despesas.valorAutomovel}`;
        //DESPESAS
        const valorFaltas = document.getElementById("faltas");
        valorFaltas.value = `${dadosConvertido.despesas.valorFaltas}`;
        const valorDescontos = document.getElementById("valor_descontos");
        valorDescontos.value = `${dadosConvertido.despesas.totalDespesas}`;
        const valorTotal = document.getElementById("valor_total");
        valorTotal.value = `${dadosConvertido.totalGeral}`;
    }
});
// elvis > ? 
// para calcular sem precisar clicar no botao
const input1 = document.getElementById('valor_base');
input1.addEventListener('focusout', calcular);
const input2 = document.getElementById('valor_transporte');
input2.addEventListener('focusout', calcular);
const input3 = document.getElementById('valor_alimentacao');
input3.addEventListener('focusout', calcular);
const input4 = document.getElementById('valor_automovel');
input4.addEventListener('focusout', calcular);
const input5 = document.getElementById('faltas');
input5.addEventListener('focusout', calcular);
