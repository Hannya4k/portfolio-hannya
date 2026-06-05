import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <App />
    <ToastContainer />
  </>
);
