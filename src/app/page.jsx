import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"

const loadTask = async () => {
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = res.json()
  // console.log(data)
  //otra forma
  const res = await prisma.task.findMany()
  console.log(res)
  return res
}

export const dynamic = 'force-dynamic'

const HomePage = async () => {

  const tasks = await loadTask()

  return (
    <>
      <h1 className="flex text-3xl justify-center text-white my-5 " >All Tasks</h1>
      <div className="grid grid-cols-3 gap-3 mt-10 p-5 ">
        {tasks.map(task => {
          return (
            <TaskCard task={task} key={task.id} />
          )
        })}
      </div>
    </>
  )
}

export default HomePage