//criar e deletar arquivos

 const fs=require('fs');
// fs.appendFile('log.log,', "loguei\n",(erro)=>{
//     console.log(erro)
// })

if(fs.existsSync('log.log,')){
fs.rmSync('log.log,');
}
console.log("fim da execução");