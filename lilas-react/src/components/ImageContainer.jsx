export default function ImageContainer({ imageUrl, alt = "Image" }) {
    return (
        <img
            src={imageUrl}
            alt={alt}
            className="rounded-image"
        />
    );
}