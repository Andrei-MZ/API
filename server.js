import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())


// ROTA PARA CRIAR
app.post('/users', async  (req, res) =>{

   await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

// ROTA PARA BUSCAR
app.get('/users', async (req, res) => {
    let users = []

    if (req.query.name) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

// ROTA DE EDITAR 1 USUARIO
app.put('/users/:id', async  (req, res) =>{


    await prisma.user.update({
        where: {
            id: req.params.id
        },
         data: {
             email: req.body.email,
             name: req.body.name,
             age: req.body.age
         }
     })
 
     res.status(201).json(req.body)
 })

 // ROTA DE DELETAR
 app.delete('/users/:id', async (req, res) =>{
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"})
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
 * senha: 
 * 
 * 
 * 
 * QD32ssGWfRT4cEeA
 */