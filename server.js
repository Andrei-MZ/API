import express from 'express'

const app = express()

app.get('/user', (req, res) => {
    res.send('Ok')
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