import {useState} from "react";

export default function ImageContainer({ imageUrl, alt = "Image", season, tags = [] }) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className="image-container">
            {isLoading && (
                <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                </div>
            )}

            {hasError ? (
                <div className="image-error">
                    <span>Failed to load image</span>
                </div>
            ) : (
                <img
                    src={imageUrl}
                    alt={alt}
                    className={`rounded-image ${isLoading ? 'loading' : ''}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            )}

            <div className="image-info">
                <h3>{alt}</h3>
                <span className="season-tag">{season}</span>
                <div className="tags">
                    {tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}