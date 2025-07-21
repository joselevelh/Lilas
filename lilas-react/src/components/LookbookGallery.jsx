import ImageContainer from "./ImageContainer.jsx";
import fetchLookbooks from "../helpers/fetchLookbooks.jsx";
import {useEffect, useState} from "react";

export default function LookbookGallery({selectedSeasons}) {
    const [filteredLookbooks, setFilteredLookbooks] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [nextCursor, setNextCursor] = useState("")
    const [loading, setLoading] = useState(false)

    // First Fetch when new season is selected
    useEffect(() => {
        async function asyncFetchLookbooks() {
            setLoading(true)
            try{
                const data = await fetchLookbooks(selectedSeasons, "")
                console.log('data', data)
                setFilteredLookbooks(data.lookbooks_list)
                setHasMore(data.has_more)
                setNextCursor(data.next_cursor) // Load more calls will use this in the future
            } catch (error){
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        asyncFetchLookbooks()
    }, [selectedSeasons])
    console.log(filteredLookbooks)


    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true)
        try{
            const data = await fetchLookbooks(selectedSeasons, nextCursor);
            console.log('loading more data', data);

            // Append new lookbooks to existing list
            setFilteredLookbooks(prevLookbooks => [...prevLookbooks, ...data.lookbooks_list]);
            setHasMore(data.has_more);
            setNextCursor(data.next_cursor);
        } catch (error){
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    // Infinite scroll handle
    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const offset = 200;
            const currentPostion = scrollTop + windowHeight;
            const bottomOfPage = documentHeight - offset;

            if (currentPostion> bottomOfPage && hasMore && loading === false) {
                loadMore();
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

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
        {loading && (
            <div className="loading-indicator">
                <p>Loading more lookbooks...</p>
            </div>
        )}

        {!hasMore && filteredLookbooks.length > 0 && (
            <div className="end-indicator">
                <p>No more lookbooks to load</p>
            </div>
        )}
    </div>
}