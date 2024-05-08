//Project with Firebase:

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import InputText from './components/InputText';
import Todo from './components/Todo';
import Undone from './components/Undone';
import { db } from './firestore.config';

export interface ITodos {
  id: string;
  task: string;
  status: boolean;
}

function App() {
  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState<ITodos[]>([])
  const todoCollectionRef = collection(db, "todo")

  const getTodo = async () => {
    const data = await getDocs(todoCollectionRef)
    setTodoList(data.docs.map((doc) => ({
      ...(doc.data() as ITodos),
      id: doc.id
    })))
  }

  useEffect(() => {
    getTodo()
  }, [])

  const makeDone = async (n: ITodos) => {
    await updateDoc(doc(todoCollectionRef, n.id), {
      status: !n.status
    })
    getTodo()
  }

  const deleteTask = async (n: ITodos) => {
    await deleteDoc(doc(todoCollectionRef, n.id))
    getTodo()
  }

  const todo = todoList.map((n) =>
    <Todo key={n.id}
      task={n.task}
      status={n.status}
      n={n}
      makeDone={makeDone}
      deleteTask={deleteTask} ></Todo>
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  const handleClick = async () => {
    await addDoc(todoCollectionRef, { task: text, status: false })
    getTodo()
  }

  return (
    <>
      <div className="container">
        <h1>Lägg till saker i listan!</h1>
        <InputText handleChange={handleChange} handleClick={handleClick} task={text}></InputText>
        {todo}
      </div>
      <div className="container">
       <Undone></Undone>
      </div>
    </>
  );
}


export default App;







//Project without Firebase:

/* import { useState } from 'react';
import './App.css';
import InputText from './components/InputText';
import Todo from './components/Todo';

export const listOfTodos = [
  { id: 1, task: "hs gdfjhsdg dfg vb cdf ", status: false },
  { id: 2, task: "hsgf jdthx zxfdfgh vhjr", status: false },
  { id: 3, task: "dfjhsdg ghdft dfse nh", status: false },
  { id: 4, task: "gdfjhsd dgfdhdft hgjf7u", status: false },
  { id: 5, task: "fjhsdg  fthdfthfh xfy", status: false }
]

function App() {

  const [todoList, setTodoList] = useState(listOfTodos)
  const [text, setText] = useState('')

  function makeDone(id: number) {
    const updateTodoList = todoList.map(todo => {
      if (id === todo.id) {
        return { ...todo, status: !todo.status }
      } return todo
    })
    setTodoList(updateTodoList)
    console.log(updateTodoList)
  }

  const deleteTask = (id: number) => {
    const filtered = todoList.filter(n => {
      return n.id!==id
    });
    console.log(filtered)
    setTodoList(filtered);
  }

  const todo = todoList.map((n) =>
    <Todo key={n.id}
      id={n.id}
      task={n.task}
      status={n.status}
      makeDone={makeDone}
      deleteTask={deleteTask} ></Todo>
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleClick() {
    console.log("Clicked")
    setTodoList([...todoList, {
      id: Math.random(),
      task: text,
      status: false
    }])
  }
  return (
    <>
      <div className="container">
        <h1>Lägg till saker i listan!</h1>
        <InputText handleChange={handleChange} handleClick={handleClick} task={text}></InputText>
        {todo}
      </div>
    </>
  );
}

export default App; 


*/