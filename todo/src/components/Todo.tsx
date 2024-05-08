//Project with Firebase:

import DeleteIcon from '@mui/icons-material/Delete';
import { ITodos } from '../App';
import "./todo.css"

interface ITodo {
    task: string
    status: boolean
    n: ITodos
    makeDone(n: ITodos): void
    deleteTask(n: ITodos): void
}

function Todo({ task , status, n , makeDone , deleteTask }: ITodo) {
    return (<>

        <div className="list">
            <li onClick={() => makeDone(n)} className={status ? "todoStrike" : "todo"}>{task}</li>
            <DeleteIcon onClick={() => deleteTask(n)} />
        </div>
    </>)
}

export default Todo





//Project without Firebase

/* import DeleteIcon from '@mui/icons-material/Delete';
import "./todo.css"

interface ITodo {
    id: number
    task: string
    status: boolean
    makeDone(id: number): void
    deleteTask(id: number): void
}

function Todo({ id, task, status, makeDone, deleteTask }: ITodo) {
    return (<>

        <div className="list">
            <li onClick={() => makeDone(id)} className={status ? "todoStrike" : "todo"}>{task}</li>
            <DeleteIcon onClick={() => deleteTask(id)} />
        </div>
    </>)
}

export default Todo */