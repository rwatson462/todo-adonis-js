import { test } from '@japa/runner'

test('get all todos', async ({ client }) => {
    const response = await client.get('http://localhost:3333/todos')
    response.assertBodyContains({ todos: [] })
})
