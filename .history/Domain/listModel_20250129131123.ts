import { Todo } from '../Domain/TodoList';


export interface List {
    name: string;
    id:number;
    color: string;
    todos: Todo[];
}
