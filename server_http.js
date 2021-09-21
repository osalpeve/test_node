const http = require('http')

const servidor = http.createServer((req,res)=>{
    
    if ( req.url === '/'){
        res.end('Pagina principal de mirda')
    }
    if ( req.url === '/contacto'){
        res.end('correo es oscaleperver@gmail.com')
    }
    res.end(`
    <h1>ERROR PAGINA NO ENCONTRADA</h1>
    <a href='/'>Pagina principal</a>
    `)
    

})

servidor.listen(5416)