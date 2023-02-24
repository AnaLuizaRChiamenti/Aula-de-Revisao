interface Funcionarios {
    nome: string;
    sexo: 'M' | 'F';
    salario: number;
}


const data: Array<Funcionarios> = [
    { nome: 'Roger Medeiros', sexo: 'M', salario: 3250, },
    { nome: 'Carolina Silva', sexo: 'F', salario: 1200, },
    { nome: 'Cristina Avila', sexo: 'F', salario: 8100, },
    { nome: 'Gustavo Hoffman', sexo: 'M', salario: 5200.35, },
    { nome: 'Eva Trindade', sexo: 'F', salario: 2501, },
    { nome: 'Andre Mathias', sexo: 'M', salario: 1750, },
    { nome: 'Joice Castro da Silva', sexo: 'F', salario: 3350.25, }
];