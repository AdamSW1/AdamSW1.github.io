import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/robotics-testing',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'projects',  // no leading slash
          element: <div></div>
        },
        {
          path: 'contact',   // no leading slash
          element: <div></div>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;