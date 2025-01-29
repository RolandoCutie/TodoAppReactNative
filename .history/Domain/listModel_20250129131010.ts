import { Todo } from "./components/TodoList";

'../constants/colors'
export interface List {
    name: string;
    id:number;
    color: string;
    todos: Todo[];
}
