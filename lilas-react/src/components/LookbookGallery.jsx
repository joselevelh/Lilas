import ImageContainer from "./ImageContainer.jsx";

export default function LookbookGallery({selectedSeasons}) {
    return <div>
        <p>{selectedSeasons.join(', ')} images go here</p>
        <ImageContainer />
    </div>
}