import Route from '@ioc:Adonis/Core/Route'
import Todo from 'App/Models/Todo'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/todos/', async () => {
    return {
        todos: await Todo.all()
    }
})

Route.get('/todo/:id', async ({ params }) => {
    return {
        todo: await Todo.find(params.id)
    }
})

Route.put('/todo', async ({ request }) => {
    const title = request.input('title')

    return {
        todo: await Todo.create({
            title,
            completed: false
        })
    }
})

Route.post('/todo/:id/complete', async ({ params }) => {
    const todo = await Todo.find(params.id)
    if (!todo) {
        return ''
    }

    // We only mark todos as complete here, never back to incomplete
    todo.completed = true
    await todo.save()

    return {
        todo
    }
})
