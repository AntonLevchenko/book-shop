import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  )
}

export default App
