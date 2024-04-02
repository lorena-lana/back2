//criar e remover pastas

const fs=require('fs');

//com o método síncrona
//fs.mkdirSync('logs');


//com o método assíncrono
// fs.mkdir('logs2',(erro)=>{
//     if(erro){
//         console.log(erro);
//     }
// })

if(fs.s=fs.existsSync('logs2')){
    fs.rmdirSync('logs2');

}
console.log("Fim da execução")