
export default function SeasonSelector({ selectedSeasons, setSelectedSeasons }) {
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