export default function SeasonSelector({ selectedSeasons, setSelectedSeasons }) {

    const seasons = [
        { name: 'spring', color: '#6F8D4DFF' },
        { name: 'summer', color: '#FFB300' },
        { name: 'fall', color: '#a67c52' },
        { name: 'winter', color: '#6b7c95' }
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
            {seasons.map(season => {
                const isSelected = selectedSeasons.includes(season.name);

                return (
                    <button
                        key={season.name}
                        className={`season-button ${isSelected ? 'selected' : ''}`}
                        data-season={season.name} // This is key for the CSS animation
                        style={{
                            borderColor: season.color,
                            color: isSelected ? '#ffffff' : season.color
                        }}
                        onClick={() => toggleSeason(season.name)}
                    >
                        {season.name}
                    </button>
                );
            })}
        </div>
    );
}