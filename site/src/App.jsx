import { createHashRouter, RouterProvider } from 'react-router-dom';  // Change this line
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home'
import './App.css'

function App() {
  const router = createHashRouter([  // Change this line
    {
      path: '/',  // Change this to root path
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home />,
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;