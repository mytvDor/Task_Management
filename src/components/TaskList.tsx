

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, markComplete, deleteTask } from '../features/tasks/taskSlice'
// import { RootState } from '../store'
import { Task } from '../types/types'

export default function TaskList({tasks}:any) {
  const dispatch = useDispatch()
  // const tasks :any = useSelector((state: RootState) => state.tasks.tasks)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const handleEdit = (task: Task) => {
    setEditingTask(task)
  }

  const handleSaveEdit = () => {
    if (editingTask) {
      dispatch(updateTask(editingTask))
      setEditingTask(null)
    }
  }

  const handleCompleteToggle = (task: Task) => {
    dispatch(markComplete(task.id))
  }

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId))
  }

  const sortedTasks = [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed))

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-violet-400 mb-6">Task List</h2>
      
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks available. Add a task to get started!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTasks.map((task) => (
            <div key={task.id} className="bg-gray-800 border border-violet-500 rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{task.title}</h3>
                <p className="text-gray-300 mb-2">{task.description}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    task.priority === 'High'
                      ? 'bg-red-500 text-white'
                      : task.priority === 'Medium'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {task.priority}
                </span>
                <p className="text-gray-400 text-sm mt-2">Due: {task.dateToComplete}</p>
                <p className="text-gray-400 text-sm">Status: {task.completed ? "Completed" : "Pending"}</p>
                <label className="flex items-center mt-4 text-sm">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleCompleteToggle(task)}
                    className="mr-2 form-checkbox h-4 w-4 text-violet-600 transition duration-150 ease-in-out"
                  />
                  Mark as {task.completed ? "Pending" : "Completed"}
                </label>
              </div>
              <div className="bg-gray-700 px-4 py-3 flex justify-between">
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-violet-600 text-white px-3 py-1 rounded hover:bg-violet-700 transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full border border-violet-500">
            <h2 className="text-2xl font-bold text-violet-400 mb-4">Edit Task</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSaveEdit()
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-violet-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Description</label>
                <textarea
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-violet-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Priority</label>
                <select
                  value={editingTask.priority}
                  onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-violet-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Due Date</label>
                <input
                  type="date"
                  value={editingTask.dateToComplete}
                  onChange={(e) => setEditingTask({ ...editingTask, dateToComplete: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-violet-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 text-white p-2 rounded hover:bg-violet-700 transition-colors duration-200"
              >
                Save Changes
              </button>
            </form>
            <button
              onClick={() => setEditingTask(null)}
              className="w-full bg-gray-600 text-white p-2 rounded mt-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}