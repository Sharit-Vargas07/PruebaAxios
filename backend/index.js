import express  from 'express' 
import  body_parser from 'body-parser'
import cors from 'cors'
import Rutausuarios from './src/routes/Usuariosroutes.js'

const servidor = express()

servidor.use(cors())

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))

servidor.listen(3000, () =>{
    console.log("esta funcionando en el puerto 3000")
})

servidor.use("/usuarios",Rutausuarios)