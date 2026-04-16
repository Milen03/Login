import { useState } from "react"

export default function TodoList() {

    const [text, setText] = useState('')
    const [tasks, setTasks] = useState([])

    const add = () => {
        if (text === '') return

        const newTask = {
            id: Math.random(),
            content: text,
            isDone: false
        }

        setTasks([...tasks, newTask])
        setText('')
    }

    const remove = (id) => {
        const updateTask = tasks.filter(task => task.id !== id)
        setTasks(updateTask)
    }

    const removeAllDoneTaks = () =>{
       const updateTask = tasks.filter(task => task.isDone !== true)
       setTasks(updateTask)
    }

    function toggle(id) {
        const updateTasks = tasks.map((task) => {
            if (task.id == id) {
                return { ...task, isDone: !task.isDone }
            }
            return task
        })
        setTasks(updateTasks)
    }




    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">

                {/* Title */}
                <h1 className="text-2xl font-bold text-white mb-4 text-center">
                    Todo List
                </h1>

                {/* Input */}
                <div className="flex gap-2 mb-4">
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') add()
                        }}
                        type="text"
                        placeholder="Добави задача..."
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-400 transition"
                        onClick={add}>
                        Add
                    </button>
                </div>

                {/* Filters */}
                <div className="flex justify-between mb-4 text-sm">
                    <button className="text-gray-400 hover:text-white">All</button>
                    <button className="text-gray-400 hover:text-white">Active</button>
                    <button className="text-gray-400 hover:text-white">Completed</button>
                </div>

                {/* Todo List */}
                <ul className="space-y-2">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex items-center justify-between bg-gray-700 p-3 rounded-lg ${task.isDone ? "opacity-60" : ""
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={task.isDone}
                                    onChange={() => toggle(task.id)}
                                    className="w-4 h-4"
                                />

                                <span className={`text-white ${task.isDone ? "line-through" : ""}`}>
                                    {task.content}
                                </span>
                            </div>

                            <button
                                className="text-red-400 hover:text-red-300"
                                onClick={() => remove(task.id)}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                    <span>{tasks.length} задачи</span>
                    <button onClick={removeAllDoneTaks} className="hover:text-white">Изчисти завършените</button>
                </div>

            </div>
        </div>

    )
}