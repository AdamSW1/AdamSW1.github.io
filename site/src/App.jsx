import { createHashRouter, RouterProvider } from 'react-router-dom'; 
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home'
import './App.css'

function App() {
  const router = createHashRouter([  
    {
      path: '/',  
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