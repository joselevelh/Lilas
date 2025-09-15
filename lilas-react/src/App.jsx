import './App.css'
import { useState } from 'react'
import SeasonSelector from "./components/SeasonSelector.jsx";
import LookbookImageGallery from "./components/LookbookImageGallery.jsx";
import LilasHeader from "./components/LilasHeader.jsx";
import {fetchLookbooksByTag, fetchUntaggedLookbooks} from "./helpers/fetchLookbooks.jsx";
import {ImageOrListSlider} from "./components/ImageOrListSlider.jsx";
import LookbookListGallery from "./components/LookbookListGallery.jsx";


function App() {
    const [selectedSeasons, setSelectedSeasons] = useState([]);
    const [selectedImageOrList, setSelectedImageOrList] = useState('image',);

    const fetchFunctionToUse =
        selectedSeasons.length > 0 ?fetchLookbooksByTag : fetchUntaggedLookbooks
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
                    ? "Or Browse Non-Seasonal Lookbooks..."
                    : `Browse ${selectedSeasons.join(', ')} Lookbooks...`}</p>
                <ImageOrListSlider
                    selectedImageOrList = {selectedImageOrList}
                    setSelectedImageOrList = {setSelectedImageOrList}
                />
                {/*If we have no season selected, we show the untagged lookbooks by default*/}
                {selectedImageOrList === 'image' ? (
                    <LookbookImageGallery
                        selectedFilter={selectedSeasons}
                        fetchFunction ={fetchFunctionToUse} />
                ) : ( // Replace with LookbookList
                    <LookbookListGallery
                        selectedFilter={selectedSeasons}
                        fetchFunction={fetchFunctionToUse}
                    />
                )}
            </div>
        </>
    )
}

export default App