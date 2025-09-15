import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ImageContainer from "./ImageContainer.jsx";
import LilasHeader from "./LilasHeader.jsx";

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
            <LilasHeader />
            <h1>{lookbookName.replace(/-/g, ' ')}</h1>
            <div className="gallery-grid">
                {images.map((imageUrl, imageIndex) => (
                    <ImageContainer
                        key={`${lookbookName}-${imageIndex}`}
                        imageUrl={imageUrl}
                        alt={`${lookbookName} image ${imageIndex + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default LookbookDetailPage;