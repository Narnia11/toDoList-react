import { useEffect, useState } from "react"
import { ITodos } from "../App"
import { db } from "../firestore.config"
import { collection, getDocs, query, where } from 'firebase/firestore';


function Undone() {

    const [todoList, setTodoList] = useState<ITodos[]>([])
    const todoCollectionRef = collection(db, "todo")

    const getTodo = async () => {
        const q = query(todoCollectionRef, where("status", "==", false))
        const data = await getDocs(q)
        setTodoList(
            data.docs.map((doc) => ({
                ...(doc.data() as ITodos),
                id: doc.id
            }))
        )
    }

    useEffect(() => {
        getTodo()
    }, [])

    getTodo()

    return (<>
        <h1>Ogjort saker:</h1>
          {todoList.map(n => 
          <div className="list"><li>{n.task}</li></div>)}
     </>)
}

export default Undone
