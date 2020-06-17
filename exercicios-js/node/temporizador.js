//tarefas agendadas com temporizador

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 3', function () {
    console.log('Executando Tarefa1! ', new Date().getSeconds())
    // vai fazer isso a cada 5 segundos, a partir das 13 horas, qualquer minuto, qualquer dia do mes na quarta
})
// uma stringo parecida com o padrão do chrome
// */5 de cinco em cinco segundos
// * em qualquer minuto
// 13 horas
// ignorar dia do mes *
// ignorar o proprio mes *
// 3 quarta feira


setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1! ')
}, 20000)//parar após 20 segundos

const regra = new schedule.RecurrenceRule()
// a regra é: executar de segunda a sexta, as 13h em qualquer minuto no segundo 30
regra.dayOfWeek = [new schedule.Range(1,5)]// segunda a sexta
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds())
})