import './App.css'
import { useState } from 'react'
import SeasonSelector from "./components/SeasonSelector.jsx";
import LookbookGallery from "./components/LookbookGallery.jsx";
import LilasHeader from "./components/LilasHeader.jsx";


function App() {
    const [selectedSeasons, setSelectedSeasons] = useState([]);

    return (
        <>
            <div className="main-app-grid">
                <LilasHeader />
                {/*<p className="main-instruction"> Search Drakes Lookbooks for Specific Clothes or Themes</p>*/}
                <p className="main-instruction"> Filter Drake's Lookbooks By Season:</p>
                <SeasonSelector
                    selectedSeasons={selectedSeasons}
                    setSelectedSeasons={setSelectedSeasons}
                />
                <p className="main-instruction">{selectedSeasons.length === 0
                    ? "Or Just Browse..."
                    : `Browse ${selectedSeasons.join(', ')} Lookbooks...`}</p>
                <LookbookGallery selectedSeasons={selectedSeasons} />
            </div>
        </>
    )
}

export default App