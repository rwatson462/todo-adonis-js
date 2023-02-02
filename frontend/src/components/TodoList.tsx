import { ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import TodoRepository from "../Todo/Repository/TodoRepository";

export default function TodoList(): ReactElement {
    const todoRepository = TodoRepository()
    const queryClient = useQueryClient()

    const { data: todos, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => await todoRepository.getAll()
    })

    const completeTodoMutation = useMutation({
        mutationFn: async(id: number) => {
            await todoRepository.complete(id)
            queryClient.invalidateQueries(['todos'])
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <ul className='todo-list'>
            {todos!.map((todo, key) => (
                <li
                    key={key}
                    onClick={() => completeTodoMutation.mutate(todo.id)}
                    className='clickable'
                >
                    <span className='fixed'>{todo.completed ? '{X}' : '[ ]'}</span>
                    <span className='todo-title'>{todo.title}</span>
                </li>
            ))}
        </ul>
    )
}