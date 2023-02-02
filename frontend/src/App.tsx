import { ReactElement } from 'react';
import './css/app.css';
import CreateTodoForm from './components/CreateTodoForm';
import Header from './components/Header/Header';
import TodoList from './components/TodoList';
import ReactQueryProvider from './Providers/ReactQueryProvider';

export default function App(): ReactElement {
  return <>
    <ReactQueryProvider>
        <Header />
        <CreateTodoForm />
        <TodoList />
    </ReactQueryProvider>
  </>
}
