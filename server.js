import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) =>{

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) =>{
    res.status(200).json(users)
})

app.listen(3000)

/**
 *  1) Tipo de Rota / Método HTTP
 *  2) Endereço
 *  3) req: request res: response
 * 
 * Métodos HTTP:
 * app.get('/user') vai buscar o usuario
 * app.post('/user') vai criar um usuario
 * app.put('/user') vai editar varios usuarios
 * app.put('/user') vai editar um usuario
 * app.delete('/user') vai deletar o usuario
 */

/**
 * Objetivos:
 * Criar uma API de usuários:
 * Criar um usuario
 * Listar um usuario
 * Editar um usuario
 * Deletar um usuario
 * 
 * user: andreimendes
 * senha: pCTXofyBjGnDcfSt
 */