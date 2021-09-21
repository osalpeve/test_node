
function timePrinter (timesec){
    let min=timesec/60
    let hou=min/60
    let day=hou/24

    console.log('minutos: '+ min)
    console.log('horas: '+ hou)
    console.log('dias: '+ day)
}
module.exports = timePrinter