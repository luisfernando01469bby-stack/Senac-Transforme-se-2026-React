import { Routes, Route } from 'react-router'
import Auth from './pages/Auth.jsx';
import Home from './pages/Home.jsx';

function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/auth" element={<Auth />}  />
        </Routes>
    )
}

export default App;