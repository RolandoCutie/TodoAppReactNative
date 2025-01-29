import { Todo } from '../Domain/todoModel';


export interface List {
    name: string;
    id:number;
    color: string;
    todos: Todo[];
}
