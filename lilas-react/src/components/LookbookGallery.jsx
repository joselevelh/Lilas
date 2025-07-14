import ImageContainer from "./ImageContainer.jsx";
import fetchLookbooks from "../helpers/fetchLookbooks.jsx";

export default async function LookbookGallery({selectedSeasons}) {
    const filteredLookbooks = await fetchLookbooks(selectedSeasons);
    return <div>
        <p>{selectedSeasons.join(', ')} images go here</p>
        {filteredLookbooks.map((lookbook) =>
            lookbook.images.map((imageUrl, imageIndex) => (
                <ImageContainer
                    key={`${lookbook.lookbook_name}-${imageIndex}`}
                    imageUrl={imageUrl}
                    alt={`${lookbook.lookbook_name} image ${imageIndex + 1}`}
                />
            ))
        )}
    </div>
}