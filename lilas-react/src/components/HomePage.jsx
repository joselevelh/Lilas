import { useState } from 'react'
import SeasonSelector from "./SeasonSelector.jsx";
import LookbookImageGallery from "./LookbookImageGallery.jsx";
import LilasHeader from "./LilasHeader.jsx";
import {fetchLookbooksByTag, fetchUntaggedLookbooks} from "../helpers/fetchLookbooks.jsx";
import {ImageOrListSlider} from "./ImageOrListSlider.jsx";
import LookbookListGallery from "./LookbookListGallery.jsx";

function HomePage() {
    const [selectedSeasons, setSelectedSeasons] = useState([]);
    const [selectedImageOrList, setSelectedImageOrList] = useState('image');

    const fetchFunctionToUse =
        selectedSeasons.length > 0 ? fetchLookbooksByTag : fetchUntaggedLookbooks

    return (
        <div className="main-app-grid">
            <LilasHeader />
            <p className="main-instruction"> Filter Drake's Lookbooks By Season:</p>
            <SeasonSelector
                selectedSeasons={selectedSeasons}
                setSelectedSeasons={setSelectedSeasons}
            />
            <p className="main-instruction">{selectedSeasons.length === 0
                ? "Or Browse Non-Seasonal Lookbooks..."
                : `Browse ${selectedSeasons.join(', ')} Lookbooks...`}</p>
            <ImageOrListSlider
                selectedImageOrList={selectedImageOrList}
                setSelectedImageOrList={setSelectedImageOrList}
            />
            {selectedImageOrList === 'image' ? (
                <LookbookImageGallery
                    selectedFilter={selectedSeasons}
                    fetchFunction={fetchFunctionToUse} />
            ) : (
                <LookbookListGallery
                    selectedFilter={selectedSeasons}
                    fetchFunction={fetchFunctionToUse}
                />
            )}
        </div>
    )
}

export default HomePage