const fs = require('fs')
const path = require('path')

const userLogs = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname,'..','logs','userLogs.txt'), `El usuario ingreso a la ruta ${req.url}`)   /* Traemos la ruta a la cual estamos ingresando */
    /* En todo momento consulta la petición - Que usuario está ingresando */

    next()
}

module.exports = userLogs