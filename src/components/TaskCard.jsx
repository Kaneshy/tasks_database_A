'use client'
import { useRouter } from "next/navigation"
import '@/styles/home.css'

function TaskCard({task}) {

    const router = useRouter()

    return (
        <div  className="bg-white  p-3 hover:bg-gray-300 hover:text-white tarjetMain "
        onClick={()=> {
            router.push('/tasks/edit/' + task.id)
        }}
        >
            <h2 className="font-bold text-2xl mb-2 text-gray-600" >{task.title}</h2>
            <div className="description" >{task.description}</div>
            <p className="text-m mb-5 text-gray-500 dateMain" >{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard