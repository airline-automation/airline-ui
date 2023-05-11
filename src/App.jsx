// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    // useEffect(() => {
    //     fetch('http://localhost:5000/')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // }, []);
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
