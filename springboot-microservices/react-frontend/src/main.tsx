import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
