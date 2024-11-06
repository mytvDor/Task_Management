
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { type Task } from '../types/types'

export default function TaskInput() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dateToComplete, setDateToComplete] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        description,
        priority,
        dateToComplete,
        completed: false,
      }
      dispatch(addTask(newTask))
      setTitle('')
      setDescription('')
      setPriority('Medium')
      setDateToComplete('')
    }
  }

  return (
    <div className="w-full max-w-md bg-gray-900 text-white border border-violet-500 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-violet-400 mb-6">Add New Task</h2>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-violet-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
              aria-label="Task title"
            />
          </div>
          <div>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-violet-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none h-24"
              aria-label="Task description"
            ></textarea>
          </div>
          <div>
            <input
              type="date"
              value={dateToComplete}
              onChange={(e) => setDateToComplete(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-violet-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
              aria-label="Date to complete"
            />
          </div>
          <div className="relative">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-violet-500 rounded-md text-white appearance-none focus:outline-none focus:ring-2 focus:ring-violet-600"
              aria-label="Task priority"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          <button 
            onClick={handleAddTask} 
            className="w-full px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 transition-colors duration-200"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}