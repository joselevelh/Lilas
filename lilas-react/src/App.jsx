import './App.css'
import { useState } from 'react'

function Header() {
    return <div className="header-section">
        <h1 className="header-text">Lilas</h1>
        <hr style={{borderWidth : '.5px'}}/>
    </div>;
}

function SeasonSelector({ selectedSeasons, setSelectedSeasons }) {
    const seasons = [
        { name: 'Spring', color: '#7CB342' }, // Fresh green
        { name: 'Summer', color: '#FFB300' }, // Sunny yellow
        { name: 'Fall', color: '#FF8F00' },   // Autumn orange
        { name: 'Winter', color: '#1976D2' }  // Cool blue
    ];

    const toggleSeason = (seasonName) => {
        setSelectedSeasons(prev =>
            prev.includes(seasonName)
                ? prev.filter(s => s !== seasonName)
                : [...prev, seasonName]
        );
    };

    return (
        <div className="season-selector">
            {seasons.map(season => (
                <button
                    key={season.name}
                    className={`season-button ${selectedSeasons.includes(season.name) ? 'selected' : ''}`}
                    style={{
                        backgroundColor: selectedSeasons.includes(season.name) ? season.color : 'transparent',
                        borderColor: season.color,
                        color: selectedSeasons.includes(season.name) ? 'white' : season.color
                    }}
                    onClick={() => toggleSeason(season.name)}
                >
                    {season.name}
                </button>
            ))}
        </div>
    );
}

function App() {
    const [selectedSeasons, setSelectedSeasons] = useState([]);

    return (
        <>
            <div className="main-app-grid">
                <Header />
                <p className="main-instruction"> Search Drakes Lookbooks for Specific Clothes or Themes</p>
                <SeasonSelector
                    selectedSeasons={selectedSeasons}
                    setSelectedSeasons={setSelectedSeasons}
                />
                <p>Selected: {selectedSeasons.join(', ')}</p>
                <p className="main-instruction">Or Just Browse...</p>
                <p>images go here</p>
                {/* Now you can use selectedSeasons in other components */}

            </div>
        </>
    )
}

export default App