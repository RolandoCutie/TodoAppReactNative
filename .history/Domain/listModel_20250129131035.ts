import { Todo } from '../components/TodoList';


export interface List {
    name: string;
    id:number;
    color: string;
    todos: Todo[];
}
