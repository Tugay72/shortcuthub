import './App.css';
import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const CreatePost = lazy(() => import('./pages/create_post/create_post'));
const Homepage = lazy(() => import('./pages/homepage/homepage'));

function App() {
  return (
    <Router>
        <Routes>
            <Route 
                path='/'
                
            />
            <Route
                path='/homepage'
                element={<Homepage/>}
            />
            <Route
                path='/homepage/:tag'
                element={<Homepage/>}
            />
            <Route
                path='/suggest'
                element={<CreatePost/>}
            />

        </Routes>
    </Router>
  );
}

export default App;
