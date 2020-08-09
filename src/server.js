//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor

// receber os dados do req.body
server.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
// rotas da aplicação
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-classes", saveClasses)
//start do servidor
server.listen(5500)
