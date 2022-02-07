const io = require('console-read-write');
 
var DataAtual = () => {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
}

async function main() {
    console.clear()
    console.log("*********************************************")
    console.log("            Cadastro de Eventos")
    console.log("*********************************************")
    
    console.log("Informe o Nome do Evento:");
    let nomeEvento = await io.read();

    /* Início - Cadastro de Palestrantes do Evento */
    let incluirPalestrante = true;
    let palestrantes = [];
    
    while (incluirPalestrante) {
        console.log("Informe o Nome do Palestrante:");
        let nomePalestrante = await io.read();
        palestrantes.push(nomePalestrante);
    
        console.log("Informar outro Palestrante (S/N) ?");
        resposta = await io.read();
        
        if (resposta == "N" || resposta == "n") {
            incluirPalestrante = false;
        }
    }
    /* Fim - Cadastro de Palestrantes do Evento */

    
    /* Inicio - Validando data do Evento */
    let dataValida = false
    var dataEvento = ""

    while (!dataValida) {
        console.log("Informe a Data do Evento:");
        var dataEvento = await io.read();    
        dataValida = (dataEvento > DataAtual());

        if (!dataValida) 
            console.log("Data Inválida. Data do Evento deve ser maior que a data atual.");
    }

    console.log("DATA DO EVENTO: " + dataEvento);
    /* Fim - Validando data do Evento */
    

    /* Início - Cadastro de Participantes do Evento */
    let podeIncluirParticipante = true;
    let participantes = [];
    let contParticipante = 0;

    while (podeIncluirParticipante) {
        console.log("Informe o Nome do Participante:");
        let nomeParticipante = await io.read();    

        console.log("Informe a Idade:");
        let idade = await io.read();    

        if (idade < 18) {
            console.log("Evento não permitido para menores de 18 anos")
        } else {
            participantes.push(nomeParticipante);
            contParticipante++;
            podeIncluirParticipante = (contParticipante < 100);

            if (podeIncluirParticipante) {
                console.log("Informar outro Participante ?");
                let resposta = await io.read();            
                podeIncluirParticipante = (resposta == "S" || resposta == "s");
            }
        }
    }
    /* Fim - Cadastro de Participantes do Evento */

    /* Início - Listagens do Evento */
    console.clear();
    console.log("*********************************************");
    console.log("      Informações do Evento Cadastrado       ");
    console.log("*********************************************");
    console.log("Nome do Evento: " + nomeEvento);
    console.log("Data do Evento: " + dataEvento);

    console.log("*********************************************");
    console.log("            Lista de Palestrantes");
    console.log("*********************************************");

    for (let index = 0; index < palestrantes.length; index++) {
        console.log(index+1 + ". " + palestrantes[index]);        
    }

    console.log("*********************************************");
    console.log("           Lista de Participantes");
    console.log("*********************************************");

    for (let index = 0; index < participantes.length; index++) {
        console.log(index+1 + ". " + participantes[index]);        
    }
    /* Fim - Listagens do Evento */

    /* EXEMPLO DO RELATÓRIO QUE ESTÁ SENDO IMPRESSO:
        *********************************************
            Informações do Evento Cadastrado
        *********************************************
        Nome do Evento: Nome do Evento
        Data do Evento: 05/12/2021
        *********************************************
                    Lista de Palestrantes
        *********************************************
        1. Palestrante 1
        2. Palestrante 2
        3. Palestrante 3
        4. Palestrante 4
        *********************************************
                Lista de Participantes
        *********************************************
        1. Participante 1
        2. Participante 2
        3. Participante 3
        4. Participante 4
        5. Participante 5
        6. Participante 6
        7. Participante 7
        8. Participante 8
        9. Participante 9
    */
}
 
main();
