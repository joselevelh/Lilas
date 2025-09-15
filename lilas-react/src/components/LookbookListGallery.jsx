import ImageContainer from "./ImageContainer.jsx";
import {useEffect, useState} from "react";
import ListItemContainer from "./ListItemContainer.jsx";

export default function LookbookListGallery({selectedFilter, fetchFunction}) {
    const [filteredLookbooks, setFilteredLookbooks] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [nextCursor, setNextCursor] = useState("")
    const [loading, setLoading] = useState(false)

    // First Fetch when a new season is selected
    useEffect(() => {
        async function asyncFetchLookbooks() {
            setLoading(true)
            try{
                const data = await fetchFunction(selectedFilter, "")
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
    }, [selectedFilter])
    console.log(filteredLookbooks)


    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true)
        try{
            const data = await fetchFunction(selectedFilter, nextCursor);
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

            if (currentPostion > bottomOfPage && hasMore && loading === false) {
                loadMore();
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return <div className='gallery-grid'>
        {filteredLookbooks.map((lookbook, imageIndex) =>
            <ListItemContainer
                key={`${lookbook.lookbook_name}-${imageIndex}`}
                lookbookName={lookbook.lookbook_name}
                thumbnailUrl={lookbook.images[0]}
                images={lookbook.images}/>
        )}


        {loading && filteredLookbooks.length > 0 && (
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