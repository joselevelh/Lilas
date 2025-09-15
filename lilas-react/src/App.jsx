import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LookbookDetailPage from './components/LookbookDetailPage.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lookbook/:lookbookName" element={<LookbookDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App