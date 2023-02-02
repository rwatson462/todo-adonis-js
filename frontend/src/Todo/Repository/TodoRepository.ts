import axios from "axios"

type TodoRepositoryType = {
    get: (id: number) => Promise<Todo>,
    getAll: () => Promise<Todo[]>,
    complete: (id: number) => Promise<Todo>,
    create: (todo: { title: string }) => Promise<Todo>
}

export default function TodoRepository(): TodoRepositoryType {
    return {
        get: (id: number) => (
            axios.get(`http://localhost:3333/todo/${id}`)
                .then(response => response.data.todo)
        ),
        getAll: () => (
            axios.get('http://localhost:3333/todos')
                .then(response => response.data.todos)
        ),
        complete: (id: number) => (
            axios.post(`http://localhost:3333/todo/${id}/complete`)
                .then(response => response.data.todo)
        ),
        create: (todo: { title: string }) => (
            axios.put(`http://localhost:3333/todo`, todo)
                .then(response => response.data.todo)
        )
    }
}
