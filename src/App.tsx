

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import { logout } from './features/auth/authSlice'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Weather from './components/Weather'
import Login from './pages/Login'

export default function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const [showWeather, setShowWeather] = useState(false)

  const toggleWeather = () => {
    setShowWeather(!showWeather)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-violet-800 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Advanced To-Do Application</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium text-gray-300">Weather</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={showWeather}
                    onChange={toggleWeather}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600"></div>
                </label>
              </div>
              {isAuthenticated && (
                <button
                  onClick={() => dispatch(logout())}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200"
                  aria-label="Logout"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {showWeather && (
            <div className="mb-8">
              <Weather />
            </div>
          )}

          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? (
                <div className="space-y-8">
                  <section className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-violet-400">Add New Task</h2>
                   <div className='flex justify-center items-center '>
                    <TaskInput></TaskInput>
                   </div>
                  </section>
                  <section className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-violet-400">Your Tasks</h2>
                    <TaskList tasks={tasks} />
                  </section>
                </div>
              ) : (
                <Navigate to="/login" replace />
              )}
            />
            <Route 
              path="/login" 
              element={
                <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                  <Login />
                </div>
              } 
            />
          </Routes>
        </main>

        <footer className="bg-gray-800 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-400">
            <p>&copy; 2023 Advanced To-Do Application. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}