import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Matchups from "./pages/Mathcups";
import Standings from "./pages/Standings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: '/matchups',
      element: <Matchups />
    },
    {
      path: "/standings",
      element: <Standings />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
