const { readFile,writeFile } = require('fs')



readFile('./content/archivo-2.txt','utf-8',(err, resul) => {
    if(err){
        console.log(err)
        return
    }
    const primero = resul
    readFile('./content/archivito.txt','utf-8', (err, resul) => {
        if(err){
            console.log(err)
            return
        }
        const segundo = resul
        writeFile( './content/resultado2.txt' , `la suma de ambos es: ${primero}, ${segundo}`,
        ( err, resul ) => {
            if(err){
                console.log(err)
                return
            }
            console.log(resul)
        }
        )
    }
    )
} 
)