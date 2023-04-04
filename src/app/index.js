import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';
import { PokemonsPage } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonsPage />
  }
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
