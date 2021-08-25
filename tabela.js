function nomeDaSuaFuncao() { 
    
    const tabela = [];

    for (let i = 0; i <= 10; i++) {

        const linha = [];

        for (let o = 0; o <= 10; o++){

            linha.push(o * i);

        }
    tabela.push(linha)
    }
    console.table(tabela)
}