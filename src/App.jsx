import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesManagement from "./pages/movie-management";
import HomePage from "./pages/home";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/movie-management",
      element: <MoviesManagement/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
