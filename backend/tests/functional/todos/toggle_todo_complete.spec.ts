import { test } from '@japa/runner'
import Todo from 'App/Models/Todo'

test('completion toggles from false to true', async ({ client }) => {
    // Plant a Todo in the database in advance
    const todo = await Todo.create({
        title: 'test todo',
        completed: false
    })

    const response = await client
        .post(`http://localhost:3333/todo/${todo.id}/complete`)
    
    response.assertBodyContains({ todo: {
        id: todo.id,
        title: todo.title,
        completed: true
    } })
})

test('completion does not toggle from true to false', async ({ client, assert }) => {
    // Plant a Todo in the database in advance
    const todo = await Todo.create({
        title: 'test todo',
        completed: true
    })

    const response = await client
        .post(`http://localhost:3333/todo/${todo.id}/complete`)
    
    response.assertBodyContains({ 
        todo: {
            id: todo.id,
            title: todo.title,
            completed: true
        }
    })

    // Todo should now be marked complete in the database
    const savedTodo = (await Todo.find(todo.id))!
    assert.isTrue(!!savedTodo.completed)
})
