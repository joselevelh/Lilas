import ImageContainer from "./ImageContainer.jsx";
import fetchLookbooks from "../helpers/fetchLookbooks.jsx";
import {useEffect, useState} from "react";

export default function LookbookGallery({selectedSeasons}) {
    const [filteredLookbooks, setFilteredLookbooks] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [nextCursor, setNextCursor] = useState("")

    // First Fetch when new season is selected
    useEffect(() => {
        async function asyncFetchLookbooks() {
            const data = await fetchLookbooks(selectedSeasons, "")
            console.log('data', data)
            setFilteredLookbooks(data.lookbooks_list)
            setHasMore(data.has_more)
            setNextCursor(data.next_cursor) // Load more calls will use this in the future
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