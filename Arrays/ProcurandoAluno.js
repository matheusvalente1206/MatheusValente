const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 1, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

function ExibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
       

        const indice = listaDeAlunosEMedias[0].indexOf(aluno)

        const mediaDoAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} tem média ${mediaDoAluno}!`)
    }else{
        console.log("Aluno não encontrado")
    }
}

ExibeNomeENota("João")  