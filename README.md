# Advanced To-Do Application

## Overview

This project is an **Advanced To-Do Application** built with **React**, **TypeScript (TSX)**, and **Vite**. It allows users to create, manage, and track tasks with a clean and intuitive UI. The application integrates a login system using Redux for state management and includes features such as user authentication, weather data fetching, and task management.

### Features

- **User Authentication**: Users can sign in and sign out using a simple authentication system with Redux. 
- **Task Management**: Users can add, view, and manage tasks (CRUD operations).
- **Weather Information**: The app fetches weather data based on the user's location.
- **Responsive Design**: The application is fully responsive, providing an optimal experience across all devices.
- **Redux State Management**: Redux is used to manage authentication and task data globally across components.

## Project Setup and Running Instructions

### Prerequisites

- **Node.js** and **npm** must be installed. If you don't have them, you can download them from [here](https://nodejs.org/).

- **Vite**: This project is created using Vite as the build tool for fast development and optimized production builds. You can find the Vite documentation [here](https://vitejs.dev/).

### Steps to Setup

1. **Clone the repository:**

   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd <YOUR_PROJECT_FOLDER>
   ```

2. **Install dependencies:**

   Run the following command to install the required packages:

   ```bash
   npm install
   ```

3. **Setup Environment Variables:**

   You will need to create a `.env` file at the root of the project. Add your environment variables (e.g., for weather API) in the `.env` file.

   Example:

   ```
   VITE_WEATHER_API_KEY=<your_weather_api_key>
   ```

4. **Run the application:**

   Now you can start the application in development mode using the following command:

   ```bash
   npm run dev
   ```

   This will start the development server, and you can access the application by navigating to `http://localhost:3000` in your web browser.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized build of the app in the `dist` folder.

### Running the Production Build

To preview the production build locally, you can use the following command:

```bash
npm run preview
```

This will serve the built application on `http://localhost:5000`.

## Project Structure

Here’s a quick overview of the project structure:

```
/public
  └── index.html             # Entry HTML file
/src
  ├── /components            # Reusable components (TaskInput, TaskList, Weather, etc.)
  ├── /features              # Redux slices (Auth, Tasks)
  ├── /pages                 # Page components (Login)
  ├── /store                 # Redux store setup
  ├── App.tsx                # Main app component
  ├── main.tsx               # Entry point for React
  └── style.css              # Global styles
```

## Screenshots

### Login Page

![Login Page](./assets/login-page.png)

### Task Management

![Task Management](./assets/task-management.png)

### Weather Information

![Weather Information](./assets/weather-info.png)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript (TSX)**: A superset of JavaScript that provides static typing and other features for better development experience.
- **Vite**: A modern build tool that provides fast development startup and optimized production builds.
- **Redux**: A predictable state container for JavaScript apps used for managing the application state.
- **Weather API**: Used to fetch weather data for the user’s location.
- **Tailwind CSS**: A utility-first CSS framework used to style the components and layout.
- **React Router**: For handling routing in the application.
- **Axios**: For making HTTP requests to external APIs (e.g., Weather API).

## Conclusion

This is a full-featured React application using **TypeScript** and **Vite** that combines authentication, task management, and external API data fetching into a single app. It demonstrates state management using **Redux**, responsive design with **Tailwind CSS**, and efficient development with **Vite**.

---

Feel free to explore the repository, suggest improvements, or contribute with a pull request!

### License

This project is licensed under the MIT License.

