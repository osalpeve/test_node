const os = require('os')
const transf = require('./time_changer')
const usuario = os.userInfo()
const path = require('path')
// transf(os.uptime())
const aja = path.resolve(__dirname,'names.js')
console.log(aja)
// console.log(os.uptime()/60)
// console.log(usuario)


