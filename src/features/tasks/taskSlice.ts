// // src/features/tasks/taskSlice.ts
// // src/features/tasks/taskSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Task } from '../../types/types';

// interface TaskState {
//   tasks: Task[];
// }

// const initialState: TaskState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask(state, action: PayloadAction<Task>) {
//       state.tasks.push(action.payload);
//     },
//     updateTask(state, action: PayloadAction<Task>) {
//       const index = state.tasks.findIndex(task => task.id === action.payload.id);
//       if (index !== -1) {
//         state.tasks[index] = action.payload;
//       }
//     },
//     deleteTask(state, action: PayloadAction<string>) {
//       state.tasks = state.tasks.filter(task => task.id !== action.payload);
//     },
//     markComplete(state, action: PayloadAction<string>) {
//       const task = state.tasks.find(task => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     },
//   },
// });

// export const { addTask, updateTask, deleteTask, markComplete } = taskSlice.actions;
// export default taskSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types/types';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    markComplete(state, action: PayloadAction<string>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, markComplete } = taskSlice.actions;
export default taskSlice.reducer;
