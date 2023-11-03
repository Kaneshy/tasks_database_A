'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


function NewPage({ params }) {

  const router = useRouter()
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  useEffect(() => {
    if(params.id){
      fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        settitle(data.title)
        setdescription(data.description)
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()

    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
    }
    router.refresh()
    router.push('/')

  }

  return (
    <div className="h-screen flex justify-center items-center " >
      <form
        className="bg-slate-800 p-10"
        onSubmit={handleSubmit}
      >

        <label htmlFor="title" className="font-bold text-sm" >
          Titulo
        </label>
        <input type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black "
          placeholder="Title"
          id="title"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm" >
          description
        </label>
        <textarea name="" cols="30" rows="10"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Descriptions"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        >
        </textarea>

        <button
          className="bg-blue-500 p-3 rounded"
        >Send</button>
        {
          params.id && (
            <button className="bg-red-400 p-3 rounded ml-4 "
            type="button"
            onClick={async()=>{
              const res = await fetch(`/api/tasks/${params.id}`,{
                method: 'DELETE'
              })
              const data = await res.json()
              router.refresh()
              router.push('/')
            }}
            >
              Delete
            </button>
          )
        }
      </form>
    </div>
  )
}

export default NewPage