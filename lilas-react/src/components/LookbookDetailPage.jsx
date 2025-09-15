import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function LookbookDetailPage() {
    const location = useLocation();
    const { lookbookName } = useParams();
    const [searchParams] = useSearchParams();

    // Try to get images from state first (for same-tab navigation), then from URL params (for new tab)
    let images = location.state?.images;

    if (!images && searchParams.get('images')) {
        try {
            images = JSON.parse(decodeURIComponent(searchParams.get('images')));
        } catch (e) {
            console.error('Failed to parse images from URL params:', e);
        }
    }

    if (!images) {
        return <div>Lookbook not found</div>;
    }

    return (
        <div>
            <h1>{lookbookName.replace(/-/g, ' ')}</h1>
            {images.map((imageUrl, imageIndex) => (
                <ImageContainer
                    key={`${lookbookName}-${imageIndex}`}
                    imageUrl={imageUrl}
                    alt={`${lookbookName} image ${imageIndex + 1}`}
                />
            ))}
        </div>
    );
}

export default LookbookDetailPage;