const http = require('http')

const servidor = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('pagina principal')
    }
    if (req.url === '/about'){

        for (i = 0; i < 100; i++){
            for (j = 0; j < 100; j++){
                console.log(` ${i} ${j}`)
            }
        }
        res.end('acerca de')
    }


})

servidor.listen(5424, ()=>{
    console.log('escuchando el puerto 5424... equisde')
})