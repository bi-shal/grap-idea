
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div data-theme="cupcake" className="p-5">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
