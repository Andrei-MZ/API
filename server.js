import express from 'express'


const app = express()
app.use(express.json())

const users = []


// ROTA PARA CRIAR
app.post('/users',  (req, res) =>{

    

    

    res.status(201).json(req.body)
})

// ROTA PARA BUSCAR
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
 * user: andrei
 * senha: crKbbVVZDl5rkubV
 */