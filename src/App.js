import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Routes/Routes';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext/ThemeProvider';


function App() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div className='mx-auto max-w-[1440px]' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}
export default App;
