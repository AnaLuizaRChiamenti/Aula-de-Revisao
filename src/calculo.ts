interface Receitas {
    valorBase: number;
    valorTransporte: number;
    valorAlimetacao: number;
    totalReceitas: number;
}

interface Despesas {
    valorAutomovel: number;
    valorFaltas: number;
    totalDespesas: number;
}

interface Calculos {
    receitas: Receitas;
    despesas: Despesas;
    totalGeral: number;
}


const botaoSubmit = document.getElementById('btn_calcular') as HTMLButtonElement
botaoSubmit.addEventListener('click', calcular)


function calcular() {
    const valorBase = (document.getElementById("valor_base") as HTMLInputElement).value;
    const valorTransporte = (document.getElementById("valor_transporte") as HTMLInputElement).value;
    const valorAlimetacao = (document.getElementById("valor_alimentacao") as HTMLInputElement).value;
    const valorReceitaTotal = document.getElementById('valor_receita') as HTMLInputElement

    const valorReceita = Number(valorBase) + Number(valorTransporte) + Number(valorAlimetacao);

    valorReceitaTotal.value = `${valorReceita}` // colocamos assim pois a propriedade HTMLInputElemento aceita apenas string

    const valorAutomovel = (document.getElementById("valor_automovel") as HTMLInputElement).value
    const valorFaltas = (document.getElementById("faltas") as HTMLInputElement).value
    const valorDescontos = document.getElementById("valor_descontos") as HTMLInputElement;

    const descontosTotal = Number(valorAutomovel) + Number(valorFaltas);

    valorDescontos.value = `${descontosTotal}`;

    const valorTotal = document.getElementById("valor_total") as HTMLInputElement; // quando precisamos colocar um valor no html não se usa o .value na captura do ID

    valorTotal.value = `${valorReceita - descontosTotal}`

    const dados: Calculos = {
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
    }

    //guardar a info no localStorage
    localStorage.setItem('dados', JSON.stringify(dados))
}

document.addEventListener("DOMContentLoaded", () => {
    let dados = localStorage.getItem('dados')

    if (dados) {
        const dadosConvertido = JSON.parse(dados) as Calculos

        dadosConvertido.receitas.valorBase;

        const valorBase = (document.getElementById("valor_base") as HTMLInputElement);
        valorBase.value = `${dadosConvertido.receitas.valorBase}`

        const valorTransporte = (document.getElementById("valor_transporte") as HTMLInputElement);
        valorTransporte.value = `${dadosConvertido.receitas.valorTransporte}`

        const valorAlimetacao = (document.getElementById("valor_alimentacao") as HTMLInputElement);
        valorAlimetacao.value = `${dadosConvertido.receitas.valorAlimetacao}`

        const valorReceitaTotal = document.getElementById('valor_receita') as HTMLInputElement;
        valorReceitaTotal.value = `${dadosConvertido.receitas.totalReceitas}`


        const valorAutomovel = (document.getElementById("valor_automovel") as HTMLInputElement)
        valorAutomovel.value = `${dadosConvertido.despesas.valorAutomovel}`

        //DESPESAS
        const valorFaltas = (document.getElementById("faltas") as HTMLInputElement)
        valorFaltas.value = `${dadosConvertido.despesas.valorFaltas}`

        const valorDescontos = document.getElementById("valor_descontos") as HTMLInputElement;
        valorDescontos.value = `${dadosConvertido.despesas.totalDespesas}`

        const valorTotal = document.getElementById("valor_total") as HTMLInputElement;
        valorTotal.value = `${dadosConvertido.totalGeral}`

    }
})

// elvis > ? 
// para calcular sem precisar clicar no botao
const input1 = document.getElementById('valor_base') as HTMLInputElement;
input1.addEventListener('focusout', calcular)

const input2 = document.getElementById('valor_transporte') as HTMLInputElement;
input2.addEventListener('focusout', calcular)

const input3 = document.getElementById('valor_alimentacao') as HTMLInputElement;
input3.addEventListener('focusout', calcular)

const input4 = document.getElementById('valor_automovel') as HTMLInputElement;
input4.addEventListener('focusout', calcular)

const input5 = document.getElementById('faltas') as HTMLInputElement;
input5.addEventListener('focusout', calcular)