import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import Home from './pages/Home';
import Matchups from "./pages/Matchups";
import Standings from "./pages/Standings";
import store from "./redux/store";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
