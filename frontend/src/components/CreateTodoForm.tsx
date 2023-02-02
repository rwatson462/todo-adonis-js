import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import TodoRepository from "../Todo/Repository/TodoRepository";

type NewTodoType = {
    title: string
}

export default function CreateTodoForm(): ReactElement {
    const { register, handleSubmit } = useForm<NewTodoType>()
    const todoRepository = TodoRepository()
    const queryClient = useQueryClient()

    const createTodoMutation = useMutation({
        mutationFn: async (data: NewTodoType) => {
            await todoRepository.create(data)
            queryClient.invalidateQueries(['todos'])
        }
    })

    return (
        <form onSubmit={handleSubmit(data => createTodoMutation.mutate(data))}>
            <input
                type='text'
                placeholder='Add a Todo here'
                {...register('title', { required: true })}
            />
            <button type='submit'>Create</button>
        </form>
    )
}