import ImageContainer from "./ImageContainer.jsx";
import fetchLookbooks from "../helpers/fetchLookbooks.jsx";
import {useEffect, useState} from "react";

export default function LookbookGallery({selectedSeasons}) {
    const [filteredLookbooks, setFilteredLookbooks] = useState([])

    useEffect(() => {
        async function asyncFetchLookbooks() {
            const data = await fetchLookbooks(selectedSeasons)
            console.log('data', data)
            setFilteredLookbooks(data)
        }
        asyncFetchLookbooks()
    }, [selectedSeasons])
    console.log(filteredLookbooks)

    return <div className='gallery-grid'>
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