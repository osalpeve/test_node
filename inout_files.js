const { readFileSync,writeFileSync } = require('fs')

const primero= readFileSync('./content/archivito.txt','utf-8')

console.log(primero)

writeFileSync('./content/archivo-2.txt',`aqui va lo que me de la gana y lo demas es: ${primero}`)

console.log(readFileSync('./content/archivo-2.txt','utf-8'))

