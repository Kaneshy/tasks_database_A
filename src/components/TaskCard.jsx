'use client'
import { useRouter } from "next/navigation"

function TaskCard({task}) {

    const router = useRouter()

    return (
        <div  className="bg-slate-900 p-3 hover:bg-slate-800 "
        onClick={()=> {
            router.push('/tasks/edit/' + task.id)
        }}
        >
            <h2 className="font-bold text-2xl mb-2 text-gray-100" >{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-m mb-5 text-gray-500" >{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard