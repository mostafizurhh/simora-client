import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Routes/Routes';



function App() {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}
export default App;
