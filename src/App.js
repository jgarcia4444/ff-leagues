import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Home from './pages/Home';
import Matchups from "./pages/Matchups";
import Standings from "./pages/Standings";
import Store from "./redux/store";
const {store, persistor} = Store

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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
