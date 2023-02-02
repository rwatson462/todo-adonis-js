import { test } from '@japa/runner'

test('create todo', async ({ client }) => {
    const todo = {
        title: 'test todo'
    }
    const response = await client
        .put('http://localhost:3333/todo')
        .form(todo)
    
    response.assertBodyContains({ todo })
})
