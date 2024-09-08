import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Layout from './shared/Layout';
import Nav from './components/Nav/Nav';
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
    <Layout>
      
    </Layout>
  );
}

export default App;
