
import { RouterProvider } from 'react-router-dom';
import navigationRouter from './Navigation/Navigation';

function App() {
  return (
<RouterProvider router={navigationRouter} />
  );
}

export default App;
