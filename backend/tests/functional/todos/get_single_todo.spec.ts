import { test } from '@japa/runner'
import Todo from 'App/Models/Todo'

test('get single todo', async ({ client }) => {
    // Plant a Todo in the database in advance
    const todo = await Todo.create({
        title: 'test todo'
    })

    const response = await client.get(`http://localhost:3333/todo/${todo.id}`)
    
    response.assertBodyContains({ todo: {
        id: todo.id,
        title: todo.title
    } })
})
