import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContext } from './Context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
    <TodoContext>
        <App />

    </TodoContext>
)
